export interface Estate {
  Greeting: string;
  Name: string;
  Plot: string;
}

export interface Focus {
  Icon: string;
  Name: string;
  Status: boolean;
}

export interface Ranking {
  Monthly: string;
  Weekly: string;
}

export interface Reputation {
  Name: string;
  Progress: number;
  Rank: string;
}

export interface FreeCompany {
  Active: string;
  ActiveMemberCount: number;
  Crest: string[];
  DC: string;
  Estate: Estate;
  Focus: Focus[];
  Formed: number;
  GrandCompany: string;
  ID: string;
  Name: string;
  ParseDate: number;
  Rank: number;
  Ranking: Ranking;
  Recruitment: string;
  Reputation: Reputation[];
  Seeking: any[];
  Server: string;
  Slogan: string;
  Tag: string;
}

export interface RootObject {
  FreeCompany: FreeCompany;
  FreeCompanyMembers?: any;
}

export interface FreeCompanyMember {
  Avatar: string;
  FeastMatches: number;
  ID: number;
  Lang?: any;
  Name: string;
  Rank: string;
  RankIcon: string;
  Server: string;
}
