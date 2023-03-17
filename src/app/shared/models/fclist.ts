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
  Crest: string[];
  ID: string;
  Name: string;
  Server: string;
}

export interface FCList {
  Pagination: Pagination;
  Results: Result[];
}
