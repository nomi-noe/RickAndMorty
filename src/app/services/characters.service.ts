import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { RickAndMortyService } from './rick-and-morty.service';

@Injectable({
  providedIn: 'root'
})
export class LinkSearchCharactersService {
  searchTermName = '';
  searchTermStatus = '';
  searchTermGender = '';
  searchTermSpecies = '';
  searchTermType = '';
  characters: Character[];


  constructor(private rickAndMortyService: RickAndMortyService) { }

  /*  search() {
      this.rickAndMortyService.searchCharacters(this.searchTerm)
        .subscribe(results => {
          this.characters = results.results;
          
        });
    }
  */

  search() {
    this.rickAndMortyService.searchCharacters(this.searchTermName, this.searchTermStatus, this.searchTermGender, this.searchTermSpecies, this.searchTermType)
      .subscribe(results => {
        this.characters = results.results;
      });
  }

}