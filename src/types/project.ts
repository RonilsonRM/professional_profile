export interface ProjectData {
  slug: string;
  title: string;
  role_type: 'consultor' | 'coordenador';
  client_industry: string;
  period: string;
  summary: string;
  featured: boolean;
  contentHtml?: string;
}