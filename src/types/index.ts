import { LucideIcon } from 'lucide-react';

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[];
}

export interface Value {
  title: string;
  description?: string;
}

export interface Objective {
  id: number;
  text: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Completed' | 'Ongoing';
  description: string;
  image: string;
  impact?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}