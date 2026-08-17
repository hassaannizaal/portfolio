export interface ProjectLinks {
  github?: string;
  live?: string;
}

export interface ProjectStack {
  lang: string[];
  backend: string[];
  data: string[];
  infra: string[];
}

export interface ProjectArchitecturePart {
  title: string;
  desc: string;
}

export interface ProjectDetailStack {
  lang: string[];
  frontend: string[];
  backend: string[];
  data: string[];
  infra: string[];
  auth: string[];
}

export interface ArchDiagramSpec {
  id: string;
  title: string;
  caption: string;
  nodes: string[];
  edges: { from: string; to: string }[];
  rows?: string[][];
}

export interface FeatureItem {
  name: string;
  how: string;
}

export interface FeatureGroup {
  id: string;
  title: string;
  blurb: string;
  items: FeatureItem[];
}

export interface ProjectDetailContent {
  overview: string;
  problem: string;
  role: string;
  owned: string[];
  shared: string[];
  decisions: { title: string; why: string }[];
  stack: ProjectDetailStack;
  layers: ProjectArchitecturePart[];
  diagrams: ArchDiagramSpec[];
  featureGroups: FeatureGroup[];
  alsoShipped: string[];
  demo: string;
  outcome: string[];
  next: string[];
}

export interface Project {
  slug: string;
  title: string;
  period: string;
  year: string;
  tag: string;
  summary: string;
  role: string;
  stack: ProjectStack;
  architecture: ProjectArchitecturePart[];
  features: string[];
  outcome: string[];
  links?: ProjectLinks;
  detail?: ProjectDetailContent;
}

export interface PortfolioData {
  name: string;
  title: string;
  eyebrow: string;
  headline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  phone: string;
}
