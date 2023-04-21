import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from '../models/character';
import { CharacterResult } from '../models/character-result';
import { Episode } from '../models/episode';
import { EpisodeResult } from '../models/episode-result';
import { SearchTermCharacter } from '../models/search-term-character';
import { SearchTermEpisode } from '../models/search-term-episode';

@Injectable({ providedIn: 'root' })
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



  constructor(private http: HttpClient) { }

  getCharacters(): Observable<CharacterResult> {
    return this.http.get<CharacterResult>(`${this.apiUrl}/character`);
  }

  getCharacter(id: string): Observable<Character> {
    const url = `${this.apiUrl}/character/${id}`;
    return this.http.get<Character>(url).pipe();
  }

  /* searchCharacters(searchTermCharacter: SearchTermCharacter) {
     if (!searchTermCharacter) {
       return null;
     }
     return this.http.get<CharacterResult>(`${this.apiUrl}/character/?name=${searchTermCharacter.name ?? ''}&status=${searchTermCharacter.status ?? ''}&gender=${searchTermCharacter.gender ?? ''}&species=${searchTermCharacter.species ?? ''}&type=${searchTermCharacter.type ?? ''}`);
   }
   */

  searchCharacters(searchTermCharacter: SearchTermCharacter, page: number = 1) {
    if (!searchTermCharacter) {
      return of();
    }
    const queryParams = `name=${searchTermCharacter.name ?? ''}&status=${searchTermCharacter.status ?? ''}&gender=${searchTermCharacter.gender ?? ''}&species=${searchTermCharacter.species ?? ''}&type=${searchTermCharacter.type ?? ''}`;
    return this.http.get<CharacterResult>(`${this.apiUrl}/character/?${queryParams}&page=${page}`);
  }


  getEpisodes(): Observable<EpisodeResult> {
    return this.http.get<EpisodeResult>(`${this.apiUrl}/episode`);
  }

  getEpisode(id: string): Observable<Episode> {
    const url = `${this.apiUrl}/episode/${id}`;
    return this.http.get<Episode>(url).pipe();
  }

  searchEpisodes(searchTermEpisode: SearchTermEpisode) {
    if (!searchTermEpisode) {
      return null;
    }
    return this.http.get<EpisodeResult>(`${this.apiUrl}/episode/?name=${searchTermEpisode.name ?? ''}&episode=${searchTermEpisode.episode ?? ''}`);
  }

  getCharacterByUrl(url: string) {
    return this.http.get<Character>(url);
  }


}
