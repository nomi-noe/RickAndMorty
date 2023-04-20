import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { CharactersService } from '../services/characters.service';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];

  constructor(public charactersService: CharactersService, public rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {

  }

  /* getCharacters(): void {
     this.rickAndMortyService.getCharacters().subscribe((apiResponse) => {
       this.characters = apiResponse.results;
     });
   }
 */
}
