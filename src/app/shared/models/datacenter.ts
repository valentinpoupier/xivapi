export interface DataCenter {
  Aether: Server[],
  Chaos: Server[],
  Crystal: Server[],
  Dynamis: Server[],
  Elemental: Server[],
  Gaia: Server[],
  Korea: Server[],
  Light: Server[],
  Mana: Server[],
  Materia: Server[],
  Meteor: Server[],
  Primal: Server[],
  猫小胖: Server[],
  莫古力: Server[],
  豆豆柴: Server[],
  陆行鸟: Server[]
}
export interface Server {
  name: string;
}

export interface ServerList {
  [key: string]: string[];
}


