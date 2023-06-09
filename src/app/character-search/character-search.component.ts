import { Component } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.css']
})

export class CharacterSearchComponent {

  listStatus = ['all', 'alive', 'dead', 'unknown']
  genders = ['female', 'male', 'genderless', 'unknown']

  constructor(public charactersService: CharactersService, public rickAndMortyService: RickAndMortyService) { }



}