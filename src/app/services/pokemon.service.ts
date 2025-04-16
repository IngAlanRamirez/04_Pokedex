import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  nextUrl: string;
  offset: number = 0;
  limit: number = 20;

  constructor() {
    this.nextUrl = `https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}`;
  }

  getPokemons() {}
}
