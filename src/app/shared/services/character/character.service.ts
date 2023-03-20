import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from '../../models/character';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiBaseUrl = 'https://xivapi.com';

  constructor(private _HttpClient: HttpClient, private loadingService: LoadingService) { }

  searchCharacter(name: string, server: string, cpt: number) : Observable<any> {
    let searchUrl = `${this.apiBaseUrl}/character/search?name=${name}&server=${server}&page=${cpt}`;
    this.loadingService.setLoading(true);
    return this._HttpClient.get(searchUrl).pipe(
      finalize(() => this.loadingService.setLoading(false)) // Mettre l'état de chargement à false après avoir reçu les données
    );
  }

  getCharacter(id: string | null) : Observable<any> {
    const url = `${this.apiBaseUrl}/character/${id}?data=FC,MIMO,PVP`;
    this.loadingService.setLoading(true); // Mettre l'état de chargement à true avant la requête
    return this._HttpClient.get<Character>(url).pipe(
      finalize(() => this.loadingService.setLoading(false)) // Mettre l'état de chargement à false après avoir reçu les données
    );
  }
}

export const CharacterResolver: ResolveFn<Character> =
  (route: ActivatedRouteSnapshot) => {
    return inject(CharacterService).getCharacter(route.paramMap.get('id'))
}

