export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl: string;
  addedAt: Date;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}