import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, of, switchMap } from 'rxjs';
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

  searchCharacters(searchTermCharacter: SearchTermCharacter) {
    if (!searchTermCharacter) {
      return null;
    }
    return this.http.get<CharacterResult>(`${this.apiUrl}/character/?name=${searchTermCharacter.name ?? ''}&status=${searchTermCharacter.status ?? ''}&gender=${searchTermCharacter.gender ?? ''}&species=${searchTermCharacter.species ?? ''}&type=${searchTermCharacter.type ?? ''}`);
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

  getAllCharacters(): Observable<any> {
    const url = `${this.apiUrl}/character`;

    return this.http.get<any>(url).pipe(
      map((response) => response.info.pages),
      switchMap((pages) => {
        const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);
        const characterRequests = pageNumbers.map((page) =>
          this.http.get<any>(`${url}?page=${page}`).pipe(
            map((response) => response.results)
          )
        );
        return characterRequests.length
          ? forkJoin(characterRequests).pipe(map((results) => [].concat(...results)))
          : of([]);
      })
    );
  }





  // searchCharacters(name: string): Observable<CharacterResult> {
  //   return this.http.get<CharacterResult>(`${this.apiUrl}/character/?name=${name}`);
  // }

  //  searchCharactersStatus(status: string): Observable<CharacterResult> {
  //   return this.http.get<CharacterResult>(`${this.apiUrl}/character/?status=${status}`)
  // }



}
