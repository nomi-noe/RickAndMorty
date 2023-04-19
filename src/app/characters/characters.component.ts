import { Component, OnInit } from '@angular/core';
import { LinkSearchCharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {


  constructor(public linkSearchCharacterService: LinkSearchCharactersService) { }

  ngOnInit(): void {

  }

  /* getCharacters(): void {
     this.rickAndMortyService.getCharacters().subscribe((apiResponse) => {
       this.characters = apiResponse.results;
     });
   }
 */
}
