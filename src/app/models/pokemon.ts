import { Stat } from './stat';

export class Pokemon {
  id: number;
  name: string;
  type1: string;
  type2?: string;
  sprite: string;
  height: number;
  weight: number;
  abilities: string[];
  hiddenAbilities: string;
  stats: Stat[];

  constructor(
    id: number,
    name: string,
    type1: string,
    type2: string,
    sprite: string,
    height: number,
    weight: number,
    abilities: string[],
    hiddenAbilities: string,
    stats: Stat[]
  ) {
    this.id = id;
    this.name = name;
    this.type1 = type1;
    this.type2 = type2;
    this.sprite = sprite;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.hiddenAbilities = hiddenAbilities;
    this.stats = stats;
  }
}
