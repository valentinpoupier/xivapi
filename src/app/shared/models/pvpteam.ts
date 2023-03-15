export interface Pagination {
  Page: number;
  PageNext?: any;
  PagePrev?: any;
  PageTotal: number;
  Results: number;
  ResultsPerPage: number;
  ResultsTotal: number;
}

export interface Profile {
  Crest: string[];
  Name: string;
  Server: string;
}

export interface Result {
  Avatar: string;
  FeastMatches: number;
  ID: number;
  Lang?: any;
  Name: string;
  Rank: string;
  RankIcon: string;
  Server: string;
}

export interface PvPTeam {
  ID: string;
  Pagination: Pagination;
  Profile: Profile;
  Results: Result[];
}
