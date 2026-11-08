export interface FikihArticleItem {
  id: number;
  slug: string;
  title: string;
  date: string;
  link: string;
  featuredImage?: string | null;
  excerpt: string;
  contentHtml: string;
}

export type FikihCategory = 
  | "Semua"
  | "Ibadah & Shalat"
  | "Muamalah & Finansial"
  | "Thaharah & Bersuci"
  | "Keluarga & Pernikahan"
  | "Puasa & Qurban";

export interface FikihSeriesItem {
  seriesNum: number;
  label: string;
  slug: string;
  title: string;
  isCurrent: boolean;
}
