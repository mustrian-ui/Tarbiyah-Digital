export interface SejarahArticleItem {
  id: number;
  slug: string;
  title: string;
  date: string;
  link: string;
  featuredImage?: string | null;
  excerpt: string;
  contentHtml: string;
}

export type SejarahSubmenu = "artikel" | "peradaban";
