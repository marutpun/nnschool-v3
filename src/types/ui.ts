import type { StaffList } from '@/types/data';

export interface NavLink {
  title: string;
  to: string;
}

export type ThemePalette = string;

export interface FeatureItem {
  svg: string;
  title: string;
  caption: string;
}

export interface StaffWithTheme extends StaffList {
  theme: string;
}
