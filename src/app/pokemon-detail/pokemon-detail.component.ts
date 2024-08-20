import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pokemon } from '../pokemon.types';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {

  // Propiedades tipadas
  pokemonName: string;
  pokemonHeight: number;
  pokemonWeight: number;
  pokemonTypes: string[];
  pokemonSpriteUrl: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Pokemon) {
    this.pokemonName = data.name;
    this.pokemonHeight = data.height;
    this.pokemonWeight = data.weight;
    this.pokemonTypes = data.types.map(type => type.type.name);
    this.pokemonSpriteUrl = data.sprites.front_default;
  }
}
