import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersComponent } from './characters/characters.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterDetailComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'episode/:id', component: EpisodeDetailComponent },
  { path: '', component: PaginationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
