import { Injectable, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Character } from '../models/character';
import { SearchTermCharacter } from '../models/search-Term-Character';
import { RickAndMortyService } from './rick-and-morty.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService implements OnInit {

  searchTermCharacter: SearchTermCharacter = new SearchTermCharacter();
  characters: Character[];
  errorMessage: string;

  currentPage = 1;
  totalPages = 1;
  pageNumbers: number[] = [];


  constructor(private rickAndMortyService: RickAndMortyService) { console.log(this.searchTermCharacter) }

  /*  search() {
      this.rickAndMortyService.searchCharacters(this.searchTerm)
        .subscribe(results => {
          this.characters = results.results;
          
        });
    }
  */
  ngOnInit(): void {
    const page = 3;
    this.searchPage(page);
  }

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


  searchPage(page: number) {
    this.rickAndMortyService.searchCharacters(this.searchTermCharacter, page)!
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
          this.currentPage = page;
          this.totalPages = results.info.pages;
          this.generatePageNumbers();
        }
      });
  }
  generatePageNumbers() {
    const maxPages = 3;
    const startPage = Math.max(1, this.currentPage - maxPages);
    const endPage = Math.min(this.totalPages, this.currentPage + maxPages);
    this.pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.searchPage(this.currentPage - 1);
    }
  }

  nextPage() {
    this.searchPage(this.currentPage + 1);
  }



}
