export interface GilShopItem {
  Item: string[];
}

export interface Recipe {
  ItemIngredient0: number[];
  ItemIngredient1: number[];
  ItemIngredient2: number[];
  ItemIngredient3: number[];
  ItemIngredient4: number[];
  ItemIngredient5: number[];
}

export interface GameContentLinks {
  GilShopItem: GilShopItem;
  Recipe: Recipe;
}

export interface GamePatch {
  Banner: string;
  ExName: string;
  ExVersion: number;
  ID: number;
  Name: string;
  Name_cn: string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
  Name_kr: string;
  ReleaseDate: number;
  Version: string;
}

export interface ItemAction {
  CondBattle: number;
  CondLv: number;
  CondPVP: number;
  CondPVPOnly: number;
  Data0: number;
  Data1: number;
  Data2: number;
  Data3: number;
  Data4: number;
  Data5: number;
  Data6: number;
  Data7: number;
  Data8: number;
  DataHQ0: number;
  DataHQ1: number;
  DataHQ2: number;
  DataHQ3: number;
  DataHQ4: number;
  DataHQ5: number;
  DataHQ6: number;
  DataHQ7: number;
  DataHQ8: number;
  GameContentLinks?: any;
  ID: number;
  Type: number;
  Url: string;
}

export interface ItemKind {
  ID: number;
  Name: string;
  Name_cn: string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
  Name_kr: string;
}

export interface ItemSearchCategory {
  Category: number;
  ClassJob?: any;
  ClassJobTarget: string;
  ClassJobTargetID: number;
  ID: number;
  Icon: string;
  IconHD: string;
  IconID: number;
  Name: string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
  Order: number;
}

export interface ItemSortCategory {
  ID: number;
  Param: number;
}

export interface ItemUICategory {
  ID: number;
  Icon: string;
  IconHD: string;
  IconID: number;
  Name: string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
  OrderMajor: number;
  OrderMinor: number;
}

export interface Item {
  AdditionalData: number;
  Adjective: number;
  AetherialReduce: number;
  AlwaysCollectable: number;
  Article: number;
  BaseParam0?: any;
  BaseParam0Target: string;
  BaseParam0TargetID: number;
  BaseParam1?: any;
  BaseParam1Target: string;
  BaseParam1TargetID: number;
  BaseParam2?: any;
  BaseParam2Target: string;
  BaseParam2TargetID: number;
  BaseParam3?: any;
  BaseParam3Target: string;
  BaseParam3TargetID: number;
  BaseParam4?: any;
  BaseParam4Target: string;
  BaseParam4TargetID: number;
  BaseParam5?: any;
  BaseParam5Target: string;
  BaseParam5TargetID: number;
  BaseParamModifier: number;
  BaseParamSpecial0?: any;
  BaseParamSpecial0Target: string;
  BaseParamSpecial0TargetID: number;
  BaseParamSpecial1?: any;
  BaseParamSpecial1Target: string;
  BaseParamSpecial1TargetID: number;
  BaseParamSpecial2?: any;
  BaseParamSpecial2Target: string;
  BaseParamSpecial2TargetID: number;
  BaseParamSpecial3?: any;
  BaseParamSpecial3Target: string;
  BaseParamSpecial3TargetID: number;
  BaseParamSpecial4?: any;
  BaseParamSpecial4Target: string;
  BaseParamSpecial4TargetID: number;
  BaseParamSpecial5?: any;
  BaseParamSpecial5Target: string;
  BaseParamSpecial5TargetID: number;
  BaseParamValue0: number;
  BaseParamValue1: number;
  BaseParamValue2: number;
  BaseParamValue3: number;
  BaseParamValue4: number;
  BaseParamValue5: number;
  BaseParamValueSpecial0: number;
  BaseParamValueSpecial1: number;
  BaseParamValueSpecial2: number;
  BaseParamValueSpecial3: number;
  BaseParamValueSpecial4: number;
  BaseParamValueSpecial5: number;
  Block: number;
  BlockRate: number;
  Bonuses: any[];
  CanBeHq: number;
  CastTimeS: number;
  ClassJobCategory?: any;
  ClassJobCategoryTarget: string;
  ClassJobCategoryTargetID: number;
  ClassJobRepair?: any;
  ClassJobRepairTarget: string;
  ClassJobRepairTargetID: number;
  ClassJobUse?: any;
  ClassJobUseTarget: string;
  ClassJobUseTargetID: number;
  CooldownS: number;
  DamageMag: number;
  DamagePhys: number;
  DefenseMag: number;
  DefensePhys: number;
  DelayMs: number;
  Description: string;
  DescriptionJSON: string[];
  DescriptionJSON_cn?: any;
  DescriptionJSON_de: string[];
  DescriptionJSON_en: string[];
  DescriptionJSON_fr: string[];
  DescriptionJSON_ja: string[];
  DescriptionJSON_kr?: any;
  Description_cn?: any;
  Description_de: string;
  Description_en: string;
  Description_fr: string;
  Description_ja: string;
  Description_kr?: any;
  Desynth: number;
  EquipRestriction: number;
  EquipSlotCategory?: any;
  EquipSlotCategoryTarget: string;
  EquipSlotCategoryTargetID: number;
  FilterGroup: number;
  GameContentLinks: GameContentLinks;
  GamePatch: GamePatch;
  GrandCompany?: any;
  GrandCompanyTarget: string;
  GrandCompanyTargetID: number;
  ID: number;
  Icon: string;
  IconHD: string;
  IconID: number;
  IsAdvancedMeldingPermitted: number;
  IsCollectable: number;
  IsCrestWorthy: number;
  IsDyeable: number;
  IsGlamourous: number;
  IsIndisposable: number;
  IsPvP: number;
  IsUnique: number;
  IsUntradable: number;
  ItemAction: ItemAction;
  ItemActionTarget: string;
  ItemActionTargetID: number;
  ItemGlamour?: any;
  ItemGlamourTarget: string;
  ItemGlamourTargetID: number;
  ItemKind: ItemKind;
  ItemRepair?: any;
  ItemRepairTarget: string;
  ItemRepairTargetID: number;
  ItemSearchCategory: ItemSearchCategory;
  ItemSearchCategoryTarget: string;
  ItemSearchCategoryTargetID: number;
  ItemSeries?: any;
  ItemSeriesTarget: string;
  ItemSeriesTargetID: number;
  ItemSortCategory: ItemSortCategory;
  ItemSortCategoryTarget: string;
  ItemSortCategoryTargetID: number;
  ItemSpecialBonus?: any;
  ItemSpecialBonusParam: number;
  ItemSpecialBonusTarget: string;
  ItemSpecialBonusTargetID: number;
  ItemUICategory: ItemUICategory;
  ItemUICategoryTarget: string;
  ItemUICategoryTargetID: number;
  LevelEquip: number;
  LevelItem: number;
  Lot: number;
  Materia?: any;
  MateriaSlotCount: number;
  MaterializeType: number;
  ModelMain: string;
  ModelSub: string;
  Name: string;
  Name_de: string;
  Name_en: string;
  Name_fr: string;
  Name_ja: string;
  Patch: number;
  Plural: string;
  Plural_de: string;
  Plural_en: string;
  Plural_fr: string;
  Plural_ja: string;
  PossessivePronoun: number;
  PriceLow: number;
  PriceMid: number;
  Pronoun: number;
  Rarity: number;
  Singular: string;
  Singular_de: string;
  Singular_en: string;
  Singular_fr: string;
  Singular_ja: string;
  StackSize: number;
  StartsWithVowel: number;
  SubStatCategory: number;
  Url: string;
}
