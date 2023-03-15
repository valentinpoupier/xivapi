export interface Pagination {
  Page: number;
  PageNext: number;
  PagePrev?: any;
  PageTotal: number;
  Results: number;
  ResultsPerPage: number;
  ResultsTotal: number;
}

export interface Result {
  Context: string;
  Source: string;
  SourceID: number;
  Text: string;
}

export interface Lore {
  Pagination: Pagination;
  Results: Result[];
  SpeedMs: number;
}
