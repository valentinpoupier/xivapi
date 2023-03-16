import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from '../../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {


  private apiBaseUrl = 'https://xivapi.com';

  constructor(private _HttpClient: HttpClient) { }

  searchCharacter(name: string, server: string, cpt: number) : Observable<any> {
    let searchUrl = `${this.apiBaseUrl}/character/search?name=${name}&server=${server}&page=${cpt}`;
    return this._HttpClient.get(searchUrl);
  }

  getCharacter(id: string | null) : Observable<any> {
    return this._HttpClient.get(`https://xivapi.com/character/${id}`)
  }

}

export const CharacterResolver: ResolveFn<Character> =
  (route: ActivatedRouteSnapshot) => {
    return inject(CharacterService).getCharacter(route.paramMap.get('id'));
}
