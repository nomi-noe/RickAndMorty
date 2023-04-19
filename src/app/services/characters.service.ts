import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
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
  errorMessage: string;


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
      .pipe(
        catchError(error => {
          console.log('Erreur:', error);
          this.errorMessage = 'Aucun résultat correspondant';
          return of();
        })
      )
      .subscribe(results => {
        this.characters = results.results;
        if (this.characters.length === 0) {
          console.log('Aucun Character trouvé');
        } else {
          this.errorMessage = '';
        }
      });
  }

}
