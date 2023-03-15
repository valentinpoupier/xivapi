import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {


  private apiBaseUrl = 'https://xivapi.com';

  constructor(private _HttpClient: HttpClient) { }

  searchCharacter(name: string, server: string, cpt: number) {
    let searchUrl = `${this.apiBaseUrl}/character/search?name=${name}&server=${server}&page=${cpt}`;
    return this._HttpClient.get(searchUrl);
  }

  getCharacter(id: string) {
    return this._HttpClient.get(`https://xivapi.com/character/${id}`).pipe(
      map((data) => {
        return data.valueOf();
      })
    );
  }

}
