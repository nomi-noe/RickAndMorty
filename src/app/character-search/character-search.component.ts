import { Component } from '@angular/core';
import { LinkSearchCharactersService } from '../services/characters.service';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.css']
})

export class CharacterSearchComponent {
  listStatus = ['alive', 'dead', 'unknown']
  genders = ['female', 'male', 'genderless', 'unknown']

  constructor(public linkSearchCharacterService: LinkSearchCharactersService, public rickAndMortyService: RickAndMortyService) { }

}