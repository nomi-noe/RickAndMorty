import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Character } from '../models/character';
import { SearchTermCharacter } from '../models/search-Term-Character';
import { RickAndMortyService } from './rick-and-morty.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  searchTermCharacter: SearchTermCharacter = new SearchTermCharacter();
  characters: Character[];
  errorMessage: string;


  constructor(private rickAndMortyService: RickAndMortyService) { console.log(this.searchTermCharacter) }

  /*  search() {
      this.rickAndMortyService.searchCharacters(this.searchTerm)
        .subscribe(results => {
          this.characters = results.results;
          
        });
    }
  */

  search() {
    this.rickAndMortyService.searchCharacters(this.searchTermCharacter)!
      .pipe(
        catchError(error => {
          console.log('Erreur:', error);
          this.errorMessage = 'Aucun résultat correspondant.';
          this.characters = [];
          return of();
        })
      )
      .subscribe(results => {
        this.characters = results.results;
        if (this.characters.length === 0) {
          console.log('Aucun Character trouvé.');
        } else {
          this.errorMessage = '';
        }
      });
  }

}
