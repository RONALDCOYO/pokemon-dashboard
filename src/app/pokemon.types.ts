// src/app/pokemon.types.ts

export interface PokemonType {
    type: {
      name: string;
    };
  }
  
  export interface PokemonSprites {
    front_default: string;
  }
  
  export interface Pokemon {
    name: string;
    height: number;
    weight: number;
    types: PokemonType[];
    sprites: PokemonSprites;
  }
  