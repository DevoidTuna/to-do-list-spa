interface PaginationData<T> {
  data: T[];
}

interface PaginationMetadata {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export default interface PaginatedResponse<T> extends PaginationData<T>, PaginationMetadata {
  meta?: PaginationMetadata;
}
