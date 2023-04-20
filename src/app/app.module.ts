import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListItemComponent } from './character-list-item/character-list-item.component';
import { CharacterSearchComponent } from './character-search/character-search.component';
import { CharactersComponent } from './characters/characters.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { EpisodeListItemComponent } from './episode-list-item/episode-list-item.component';
import { EpisodeSearchComponent } from './episode-search/episode-search.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RickAndMortyService } from './services/rick-and-morty.service';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterListItemComponent,
    HeaderComponent,
    FooterComponent,
    CharacterDetailComponent,
    CharacterSearchComponent,
    EpisodesComponent,
    EpisodeDetailComponent,
    EpisodeListItemComponent,
    EpisodeSearchComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CharactersComponent, RickAndMortyService, EpisodesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
