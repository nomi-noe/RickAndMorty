import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../models/character';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character: Character | undefined;

  constructor(
    private route: ActivatedRoute,
    private rickEtMortyService: RickAndMortyService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getCharacter(params['id']);
    })
  }

  getCharacter(id: string): void {
    this.rickEtMortyService.getCharacter(id)
      .subscribe(character =>
        this.character = character);
  }

  goBack(): void {
    this.location.back();
  }


}
