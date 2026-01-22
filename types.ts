export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string; // Placeholder URL
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PressItem {
  id: number;
  title: string;
  platform: string;
  date: string;
  link?: string;
  type: 'newsletter' | 'press-release';
}

export interface VideoContentItem {
  id: number;
  title: string;
  role: string;
  purpose: string;
  platform: 'Instagram' | 'LinkedIn' | 'Other';
  instagramUrl?: string;
  link?: string;
}
