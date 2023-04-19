import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { CharacterResult } from '../models/character-result';


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

  searchCharacters(name: string, status: string, gender: string, species: string, type: string) {
    return this.http.get<CharacterResult>(`${this.apiUrl}/character/?name=${name}&status=${status}&gender=${gender}&species=${species}&type=${type}`);
  }

  // searchCharacters(name: string): Observable<CharacterResult> {
  //   return this.http.get<CharacterResult>(`${this.apiUrl}/character/?name=${name}`);
  // }

  //  searchCharactersStatus(status: string): Observable<CharacterResult> {
  //   return this.http.get<CharacterResult>(`${this.apiUrl}/character/?status=${status}`)
  // }



}
