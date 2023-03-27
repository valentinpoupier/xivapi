export interface trueCharacter {
  Achievements: any
  AchievementsPublic: any
  Character: Character
  FreeCompany: FreeCompany
  FreeCompanyMembers: any
  Friends: any
  FriendsPublic: any
  Minions: Minion[]
  Mounts: Mount[]
  PvPTeam: any
}

export interface Character {
  ActiveClassJob: ActiveClassJob
  Avatar: string
  Bio: string
  ClassJobs: ClassJob[]
  ClassJobsBozjan: ClassJobsBozjan
  ClassJobsElemental: ClassJobsElemental
  DC: string
  FreeCompanyId: string
  FreeCompanyName: string
  GearSet: GearSet
  Gender: number
  GenderID: number
  GrandCompany: GrandCompany
  GuardianDeity: GuardianDeity
  ID: number
  Lang: any
  Name: string
  Nameday: string
  ParseDate: number
  Portrait: string
  PvPTeamId: any
  Race: Race
  Server: string
  Title: Title
  TitleTop: boolean
  Town: Town
  Tribe: Tribe
}

export interface ActiveClassJob {
  Class: Class
  ExpLevel: number
  ExpLevelMax: number
  ExpLevelTogo: number
  IsSpecialised: boolean
  Job: Job
  Level: number
  Name: string
  UnlockedState: UnlockedState
}

export interface Class {
  Abbreviation: string
  ClassJobCategory: ClassJobCategory
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface ClassJobCategory {
  ID: number
  Name: string
}

export interface Job {
  Abbreviation: string
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface UnlockedState {
  ID: number
  Name: string
}

export interface ClassJob {
  Class: Class2
  ExpLevel: number
  ExpLevelMax: number
  ExpLevelTogo: number
  IsSpecialised: boolean
  Job: Job2
  Level: number
  Name: string
  UnlockedState: UnlockedState2
}

export interface Class2 {
  Abbreviation: string
  ClassJobCategory: ClassJobCategory2
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface ClassJobCategory2 {
  ID: number
  Name: string
}

export interface Job2 {
  Abbreviation: string
  ClassJobCategory: ClassJobCategory3
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface ClassJobCategory3 {
  ID: number
  Name: string
}

export interface UnlockedState2 {
  ID?: number
  Name: string
}

export interface ClassJobsBozjan {
  Level: number
  Mettle: any
  Name: string
}

export interface ClassJobsElemental {
  ExpLevel: number
  ExpLevelMax: number
  ExpLevelTogo: number
  Level: number
  Name: string
}

export interface GearSet {
  Attributes: Attribute[]
  Class: Class3
  Gear: Gear
  GearKey: string
  Job: Job3
  Level: number
}

export interface Attribute {
  Attribute: Attribute2
  Value: number
}

export interface Attribute2 {
  ID: number
  Name: string
}

export interface Class3 {
  Abbreviation: string
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Gear {
  Body: Body
  Bracelets: Bracelets
  Earrings: Earrings
  Feet: Feet
  Hands: Hands
  Head: Head
  Legs: Legs
  MainHand: MainHand
  Necklace: Necklace
  Ring1: Ring1
  Ring2: Ring2
  SoulCrystal: SoulCrystal
}

export interface Body {
  Creator: any
  Dye: Dye
  Item: Item
  Materia: Materum[]
  Mirage: Mirage
}

export interface Dye {
  ID: number
  Icon: string
  Name: string
}

export interface Item {
  ClassJobCategory: ClassJobCategory4
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory4 {
  ID: number
  Name: string
}

export interface ItemUicategory {
  ID: number
  Name: string
}

export interface Materum {
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Mirage {
  ID: number
  Icon: string
  Name: string
}

export interface Bracelets {
  Creator: any
  Dye: any
  Item: Item2
  Materia: Materum2[]
  Mirage: any
}

export interface Item2 {
  ClassJobCategory: ClassJobCategory5
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory2
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory5 {
  ID: number
  Name: string
}

export interface ItemUicategory2 {
  ID: number
  Name: string
}

export interface Materum2 {
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Earrings {
  Creator: any
  Dye: any
  Item: Item3
  Materia: Materum3[]
  Mirage: any
}

export interface Item3 {
  ClassJobCategory: ClassJobCategory6
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory3
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory6 {
  ID: number
  Name: string
}

export interface ItemUicategory3 {
  ID: number
  Name: string
}

export interface Materum3 {
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Feet {
  Creator: any
  Dye: Dye2
  Item: Item4
  Materia: Materum4[]
  Mirage: Mirage2
}

export interface Dye2 {
  ID: number
  Icon: string
  Name: string
}

export interface Item4 {
  ClassJobCategory: ClassJobCategory7
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory4
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory7 {
  ID: number
  Name: string
}

export interface ItemUicategory4 {
  ID: number
  Name: string
}

export interface Materum4 {
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Mirage2 {
  ID: number
  Icon: string
  Name: string
}

export interface Hands {
  Creator: any
  Dye: Dye3
  Item: Item5
  Materia: Materum5[]
  Mirage: Mirage3
}

export interface Dye3 {
  ID: number
  Icon: string
  Name: string
}

export interface Item5 {
  ClassJobCategory: ClassJobCategory8
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory5
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory8 {
  ID: number
  Name: string
}

export interface ItemUicategory5 {
  ID: number
  Name: string
}

export interface Materum5 {
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Mirage3 {
  ID: number
  Icon: string
  Name: string
}

export interface Head {
  Creator: any
  Dye: Dye4
  Item: Item6
  Materia: Materum6[]
  Mirage: Mirage4
}

export interface Dye4 {
  ID: number
  Icon: string
  Name: string
}

export interface Item6 {
  ClassJobCategory: ClassJobCategory9
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory6
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory9 {
  ID: number
  Name: string
}

export interface ItemUicategory6 {
  ID: number
  Name: string
}

export interface Materum6 {
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Mirage4 {
  ID: number
  Icon: string
  Name: string
}

export interface Legs {
  Creator: any
  Dye: Dye5
  Item: Item7
  Materia: Materum7[]
  Mirage: Mirage5
}

export interface Dye5 {
  ID: number
  Icon: string
  Name: string
}

export interface Item7 {
  ClassJobCategory: ClassJobCategory10
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory7
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory10 {
  ID: number
  Name: string
}

export interface ItemUicategory7 {
  ID: number
  Name: string
}

export interface Materum7 {
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Mirage5 {
  ID: number
  Icon: string
  Name: string
}

export interface MainHand {
  Creator: any
  Dye: any
  Item: Item8
  Materia: Materum8[]
  Mirage: Mirage6
}

export interface Item8 {
  ClassJobCategory: ClassJobCategory11
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory8
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory11 {
  ID: number
  Name: string
}

export interface ItemUicategory8 {
  ID: number
  Name: string
}

export interface Materum8 {
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Mirage6 {
  ID: number
  Icon: string
  Name: string
}

export interface Necklace {
  Creator: any
  Dye: any
  Item: Item9
  Materia: Materum9[]
  Mirage: any
}

export interface Item9 {
  ClassJobCategory: ClassJobCategory12
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory9
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory12 {
  ID: number
  Name: string
}

export interface ItemUicategory9 {
  ID: number
  Name: string
}

export interface Materum9 {
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Ring1 {
  Creator: any
  Dye: any
  Item: Item10
  Materia: Materum10[]
  Mirage: any
}

export interface Item10 {
  ClassJobCategory: ClassJobCategory13
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory10
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory13 {
  ID: number
  Name: string
}

export interface ItemUicategory10 {
  ID: number
  Name: string
}

export interface Materum10 {
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Ring2 {
  Creator: any
  Dye: any
  Item: Item11
  Materia: Materum11[]
  Mirage: any
}

export interface Item11 {
  ClassJobCategory: ClassJobCategory14
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory11
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory14 {
  ID: number
  Name: string
}

export interface ItemUicategory11 {
  ID: number
  Name: string
}

export interface Materum11 {
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface SoulCrystal {
  Creator: any
  Dye: any
  Item: Item12
  Materia: any[]
  Mirage: any
}

export interface Item12 {
  ClassJobCategory: ClassJobCategory15
  ID: number
  Icon: string
  ItemUICategory: ItemUicategory12
  LevelEquip: number
  LevelItem: number
  Name: string
  Rarity: number
}

export interface ClassJobCategory15 {
  ID: number
  Name: string
}

export interface ItemUicategory12 {
  ID: number
  Name: string
}

export interface Job3 {
  Abbreviation: string
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface GrandCompany {
  Company: Company
  Rank: Rank
}

export interface Company {
  ID: number
  Name: string
  Url: string
}

export interface Rank {
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface GuardianDeity {
  GuardianDeity: any
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Race {
  ID: number
  Name: string
  Url: string
}

export interface Title {
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Town {
  ID: number
  Icon: string
  Name: string
  Url: string
}

export interface Tribe {
  ID: number
  Icon: any
  Name: string
  Url: string
}

export interface FreeCompany {
  Active: string
  ActiveMemberCount: number
  Crest: string[]
  DC: string
  Estate: Estate
  Focus: Focu[]
  Formed: number
  GrandCompany: string
  ID: string
  Name: string
  ParseDate: number
  Rank: number
  Ranking: Ranking
  Recruitment: string
  Reputation: Reputation[]
  Seeking: Seeking[]
  Server: string
  Slogan: string
  Tag: string
}

export interface Estate {
  Greeting: string
  Name: string
  Plot: string
}

export interface Focu {
  Icon: string
  Name: string
  Status: boolean
}

export interface Ranking {
  Monthly: number
  Weekly: number
}

export interface Reputation {
  Name: string
  Progress: number
  Rank: string
}

export interface Seeking {
  Icon: string
  Name: string
  Status: boolean
}

export interface Minion {
  Icon: string
  Name: string
}

export interface Mount {
  Icon: string
  Name: string
}
