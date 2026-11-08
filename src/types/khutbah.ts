export interface KhutbahItem {
  id: number;
  slug: string;
  title: string;
  date: string;
  link: string;
  featuredImage?: string | null;
  pemateri: string;
  excerpt: string;
  contentHtml: string;
}

export interface KhutbahFilter {
  search: string;
  category: string;
  onlyBookmarked: boolean;
}
