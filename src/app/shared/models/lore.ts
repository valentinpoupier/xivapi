export interface Lore {
  Pagination: Pagination
  Results: Result[]
  SpeedMs: number
}

export interface Pagination {
  Page: number
  PageNext: number
  PagePrev: any
  PageTotal: number
  Results: number
  ResultsPerPage: number
  ResultsTotal: number
}

export interface Result {
  Data: Data
  Text: string
}

export interface Data {
  GamePatchID: number
  ID: number
  Icon?: string
  Name?: string
  Name_cn: any
  Name_de?: string
  Name_en?: string
  Name_fr?: string
  Name_ja?: string
  Name_kr: any
  Url: string
}
