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

  currentPage = 1;
  totalPages = 1;
  pageNumbers: number[] = [];


  constructor(private rickAndMortyService: RickAndMortyService) { }


  search() {
    this.rickAndMortyService.searchCharacters(this.searchTermCharacter, this.currentPage)
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
          this.totalPages = results.info.pages;
          this.generatePageNumbers();
        }
      });
  }

  searchPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.search();
  }
  // searchPage(page: number) {
  //   this.rickAndMortyService.searchCharacters(this.searchTermCharacter, this.currentPage)
  //     .pipe(
  //       catchError(error => {
  //         console.log('Erreur:', error);
  //         this.errorMessage = 'Aucun résultat correspondant.';
  //         this.characters = [];
  //         return of();
  //       })
  //     )
  //     .subscribe(results => {
  //       this.characters = results.results;
  //       if (this.characters.length === 0) {
  //         console.log('Aucun Character trouvé.');
  //       } else {
  //         this.errorMessage = '';
  //         this.currentPage = page;
  //         this.totalPages = results.info.pages;
  //         this.generatePageNumbers();
  //       }
  //     });
  // }
  generatePageNumbers() {
    const maxPages = 3;
    const startPage = Math.max(1, this.currentPage - maxPages);
    const endPage = Math.min(this.totalPages, this.currentPage + maxPages);
    this.pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      this.search();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.search();
    }
  }

}
