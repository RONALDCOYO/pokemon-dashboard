import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Pokemon } from './pokemon.types';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemon(idOrName: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${idOrName}`);
  }

  getPokemons(idsOrNames: string[]): Observable<Pokemon[]> {
    return forkJoin(idsOrNames.map(idOrName => this.getPokemon(idOrName)));
  }
}
