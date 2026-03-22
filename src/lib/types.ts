// ============================================================
// TYPES — Shared TypeScript interfaces across the portfolio
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  proficiency: number; // 0-100
  category: 'frontend' | 'backend' | 'tooling' | 'design';
  isPrimary?: boolean;
}

export interface MetricItem {
  key: string;
  value: string;
}

export interface ProjectMeta {
  title: string;
  description: string;
  tags: string[];
  coverImage: string;
  liveUrl?: string;
  repoUrl?: string;
  date: Date;
  featured: boolean;
  role: string;
  status: 'LIVE_DEPLOYMENT' | 'IN_DEVELOPMENT' | 'ARCHIVED';
  metrics?: Record<string, string>;
}

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type StatusColor = 'online' | 'idle' | 'error';
