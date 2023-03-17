export interface ItemList {
  Pagination: Pagination
  Results: Result[]
  SpeedMs: number
}

export interface Pagination {
  Page: number
  PageNext: any
  PagePrev: any
  PageTotal: number
  Results: number
  ResultsPerPage: number
  ResultsTotal: number
}

export interface Result {
  ID: number
  Icon: string
  Name: string
  Url: string
  UrlType: string
  _: string
  _Score: number
}
