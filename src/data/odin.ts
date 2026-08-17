import type { ProjectDetailContent } from "@/lib/types";

export const odinDetail: ProjectDetailContent = {
  overview:
    "ODIN is the operator inbox and the OmniChannel API under it. Agents answer Meta, WhatsApp, YouTube, email, and a web widget from one conversation. It runs on a client tenant. Code and data stay private.",
  problem:
    "Support lived in five apps. Routing was whoever clicked first. One replica dying could take the API with it. We needed one conversation model, assignment that respects capacity, and a process that still serves traffic if Mongo or Redis is late.",
  role:
    "Full stack on this product. I shipped the Next dashboard, OmniChannel REST and Socket.IO, BullMQ workers, and the ticket to PR to verify loop.",
  owned: [
    "Agent inbox and email workspace",
    "Assignment engine on BullMQ",
    "Socket rooms across two pods",
    "Boot order so the API stays up",
    "Ticket to PR to verify loop",
  ],
  shared: [
    "Channel adapter repos",
    "Identity and login",
    "Sentiment model training",
  ],
  decisions: [
    {
      title: "Sockets skip the BFF",
      why: "REST goes Next to OmniChannel so cookies stay HttpOnly. Sockets go straight to OmniChannel. Proxying Socket.IO through Next ate events and made sticky sessions worse. Nginx sticky plus a Redis adapter so replica B sees replica A’s room.",
    },
    {
      title: "Assign in a queue, not in the webhook",
      why: "Meta times out if you pick an agent on the request. New chat, status change, 15 min sweep, 30 sec waiting sweep: one BullMQ job. Bucket, then pool, then capacity, then round robin.",
    },
    {
      title: "Listen first, connect later",
      why: "HTTP comes up before Mongo, Redis, Kafka, or MinIO finish. Inbox degrades. The pod does not restart because MinIO is slow. Waiting for every store looked cleaner. It killed us on boot.",
    },
    {
      title: "One assignment job for every trigger",
      why: "Four entry points, one code path. If VIP routing is wrong, it is wrong everywhere, and it shows up in one worker log. Four separate pickers would have drifted.",
    },
  ],
  stack: {
    lang: ["TypeScript", "Node.js 22", "Python 3"],
    frontend: ["Next.js 16", "React 19", "SWR", "Zustand", "CASL"],
    backend: ["Express", "Socket.IO", "BullMQ", "FastAPI", "KafkaJS"],
    data: ["MongoDB", "Redis", "MinIO", "Kafka"],
    infra: ["Docker", "Nginx", "Azure DevOps"],
    auth: ["JWT", "Next BFF"],
  },
  layers: [
    {
      title: "Control plane",
      desc: "Docs and tickets live here. An agent clones a product repo, implements, opens an ADO PR. Verify has to pass. Opening the PR is not done.",
    },
    {
      title: "APIs",
      desc: "OmniChannel on 3000 is the hub for REST and sockets. Scheduler runs crons. Sentiment is FastAPI on 8000. Campaigns and journeys are separate services so a slow blast does not stall the inbox.",
    },
    {
      title: "Dashboard",
      desc: "Next.js 16. License flags hide sidebar items you should not see. One AgentWorkspace for inbox and email. Insight charts load on their own routes so one slow widget does not freeze the page.",
    },
  ],
  diagrams: [
    {
      id: "system",
      title: "System",
      caption:
        "UI talks to OmniChannel through a Next BFF for REST. Sockets skip that hop. Campaigns and journeys are their own APIs. Stores sit under OmniChannel.",
      nodes: [
        "OdinUI",
        "OmniChannel",
        "Scheduler",
        "Sentiment",
        "Campaign",
        "Journey",
        "Mongo",
        "Redis",
        "MinIO",
        "Kafka",
      ],
      edges: [
        { from: "OdinUI", to: "OmniChannel" },
        { from: "OdinUI", to: "Campaign" },
        { from: "OdinUI", to: "Journey" },
        { from: "OmniChannel", to: "Mongo" },
        { from: "OmniChannel", to: "Redis" },
        { from: "OmniChannel", to: "MinIO" },
        { from: "OmniChannel", to: "Kafka" },
        { from: "OmniChannel", to: "Sentiment" },
        { from: "Scheduler", to: "OmniChannel" },
      ],
      rows: [
        ["OdinUI"],
        ["OmniChannel", "Scheduler", "Sentiment", "Campaign", "Journey"],
        ["Mongo", "Redis", "MinIO", "Kafka"],
      ],
    },
    {
      id: "realtime",
      title: "Realtime path",
      caption:
        "Webhook hits REST. Heavy work (sentiment, comments) goes to BullMQ. Redis fans out. Socket.IO paints the inbox.",
      nodes: [
        "Webhook",
        "REST",
        "BullMQ",
        "Sentiment",
        "RedisPubSub",
        "SocketIO",
        "Inbox",
      ],
      edges: [
        { from: "Webhook", to: "REST" },
        { from: "REST", to: "BullMQ" },
        { from: "BullMQ", to: "Sentiment" },
        { from: "REST", to: "RedisPubSub" },
        { from: "RedisPubSub", to: "SocketIO" },
        { from: "SocketIO", to: "Inbox" },
      ],
    },
    {
      id: "control",
      title: "Control plane",
      caption:
        "ADO story becomes a markdown ticket. An agent clones, implements, opens a PR. Merge after verify. Opening the PR is not done.",
      nodes: [
        "ADOBoards",
        "Tickets",
        "Dispatch",
        "ImplAgent",
        "PR",
        "VerifyAgent",
        "Done",
      ],
      edges: [
        { from: "ADOBoards", to: "Tickets" },
        { from: "Tickets", to: "Dispatch" },
        { from: "Dispatch", to: "ImplAgent" },
        { from: "ImplAgent", to: "PR" },
        { from: "PR", to: "VerifyAgent" },
        { from: "VerifyAgent", to: "Done" },
      ],
    },
  ],
  featureGroups: [
    {
      id: "inbox",
      title: "Inbox",
      blurb:
        "This is the screen agents live in. Email is the same shell with threading bolted on.",
      items: [
        {
          name: "One workspace",
          how: "Agents were flipping tabs. Inbox and email share AgentWorkspace. Config swaps filters and the composer. Right rail is profile, notes, logs.",
        },
        {
          name: "Live updates",
          how: "Two pods used to split a room. Messages, typing, assignment, and uploads ride one socket. A Redis adapter fans rooms across replicas. Skip it and replica B never sees replica A.",
        },
        {
          name: "Email",
          how: "Gmail watch dies after a week if you forget. Inbound lands on a worker. Scheduler renews Gmail and Outlook so push does not go silent.",
        },
      ],
    },
    {
      id: "routing",
      title: "Assignment",
      blurb:
        "Not a single queue. If this is wrong, VIP chats sit while interns get flooded.",
      items: [
        {
          name: "The engine",
          how: "Job reads queue bucket priority, then agent pool, then leftover capacity, then round robin. Same job for new chats, status changes, and the sweeps.",
        },
        {
          name: "Waiting and SLA",
          how: "Waiting chats went stale. A 30 sec sweep sends follow ups. An SLA worker stamps breaches. Auto assign has a retry cap so we do not loop forever.",
        },
      ],
    },
    {
      id: "channels",
      title: "Channels",
      blurb: "One Conversation document. Adapters eat the ugly parts.",
      items: [
        {
          name: "Meta and YouTube",
          how: "Webhooks and Graph. Crons fetch posts and mentions. Comment sync is BullMQ. If YouTube OAuth fails at boot we disable YT and keep the rest of the API up.",
        },
        {
          name: "WhatsApp and widget",
          how: "Eocean and WSender webhooks. Widget is a public embed plus a socket session. CSAT can fire when a bot hands to a human.",
        },
      ],
    },
    {
      id: "ai",
      title: "Sentiment, copilot, bot",
      blurb:
        "Sentiment is a Python box we HTTP into. The widget bot is Kafka, not a function on the request.",
      items: [
        {
          name: "Sentiment",
          how: "FastAPI and PyTorch on 8000. Omni workers POST predict. If that service is down, comments still save. They just skip a score.",
        },
        {
          name: "Copilot",
          how: "Tone, rewrite, summary from the composer. Hits the intelligence route. I wired the UI and the API calls. I did not train the model.",
        },
        {
          name: "Widget bot",
          how: "User line to Kafka in. Bot reply on the out topic. Processor writes the message, emits socket, can hand to a human.",
        },
      ],
    },
    {
      id: "competitor",
      title: "Competitor pipeline",
      blurb:
        "Write path is Python. Omni only enqueues, reads, and invalidates cache.",
      items: [
        {
          name: "Collect",
          how: "Cron dumps jobs on Redis. Worker: Apify, then normalize, then MinIO raw, then Mongo, then OpenSearch. Socket fires when a run finishes so the compare page updates.",
        },
        {
          name: "Cost guard",
          how: "Apify bills per run. A cron plus an internal endpoint stop collects when the org hits budget.",
        },
      ],
    },
  ],
  alsoShipped: [
    "CRM merge, channel cards, logs",
    "Keywords and reply templates",
    "Campaigns on a separate service. UI polls, no sockets",
    "Journey builder, React Flow to Qdrant",
    "Insights charts over Mongo aggregates",
    "Knowledge base parse worker plus MinIO",
    "Race to Ace leaderboard on the same stats Insights already has",
  ],
  demo: "No live tenant here. Client product, private data. Email me and I will walk the inbox, assignment, and sockets on a screen share.",
  outcome: [
    "Inbox, REST, sockets, workers, and crons run on a client tenant.",
    "Two pods can share a conversation room. We learned that by splitting one.",
    "Assignment is buckets, pools, capacity, round robin. Not first free agent.",
    "A ticket is not done when the PR opens. Verify has to pass.",
  ],
  next: [
    "Put the assignment job behind a small state machine so sweeps and new chats cannot race.",
    "Fail closed on YouTube OAuth at boot, with a dashboard flag, instead of silently disabling YT.",
    "Record why a chat went to a given agent so a lead can audit VIP routing.",
  ],
};
