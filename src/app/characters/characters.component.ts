import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {


  constructor(public charactersService: CharactersService) { }

  ngOnInit(): void {

  }

  /* getCharacters(): void {
     this.rickAndMortyService.getCharacters().subscribe((apiResponse) => {
       this.characters = apiResponse.results;
     });
   }
 */
}
