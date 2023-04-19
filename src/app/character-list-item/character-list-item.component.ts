import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.css']
})
export class CharacterListItemComponent implements OnInit {
  @Input() character: Character;

  constructor() { }

  ngOnInit(): void {
    console.log(this.character);
  }

}
