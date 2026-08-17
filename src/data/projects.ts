import type { Project } from "@/lib/types";
import { odinDetail } from "./odin";

export const projects: Project[] = [
  {
    slug: "odin",
    title: "ODIN",
    period: "2025 to Present",
    year: "2025",
    tag: "Work",
    summary:
      "One inbox for five channels. I built the operator UI, the OmniChannel API, and the assignment engine under both.",
    role: "Full stack. Dashboard, API, sockets, workers, ticket loop.",
    stack: {
      lang: ["TypeScript", "Node.js", "Python"],
      backend: ["Express", "Socket.IO", "BullMQ", "FastAPI", "PyTorch"],
      data: ["MongoDB", "Redis", "Kafka", "MinIO"],
      infra: ["Next.js", "Docker", "Nginx", "Azure DevOps"],
    },
    architecture: [
      {
        title: "Control plane",
        desc: "Tickets become clones, PRs, and a verify gate. Opening a PR is not done.",
      },
      {
        title: "APIs",
        desc: "OmniChannel REST and sockets, a cron scheduler, and a Python sentiment service. Workers on BullMQ. Bot bridge on Kafka.",
      },
      {
        title: "Dashboard",
        desc: "Next.js operator portal. Inbox, listening, CRM, campaigns, insights.",
      },
    ],
    features: [
      "One agent inbox across Facebook, Instagram, WhatsApp and YouTube",
      "Assignment by bucket, pool, capacity, then round robin",
      "Sockets that survive two pods via Redis",
      "Sentiment as a sidecar so comments still save if it is down",
      "Ticket to PR to verify. Merge is what flips done.",
    ],
    outcome: [
      "Production inbox, API, sockets, and workers on a client tenant.",
      "API still boots if Mongo, Redis, Kafka or MinIO are late.",
      "Assignment is not first free agent.",
    ],
    links: {},
    detail: odinDetail,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function stackList(project: Project) {
  return [
    ...project.stack.lang,
    ...project.stack.backend,
    ...project.stack.data,
    ...project.stack.infra,
  ];
}
