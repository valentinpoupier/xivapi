import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Character } from '../../models/character';
import { FreeCompany } from '../../models/freecompany';
import { CharacterService } from '../character/character.service';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class FreecompanyService {

  apiBaseUrl = 'https://xivapi.com';

  constructor(private _HttpClient: HttpClient, private loadingService: LoadingService) { }

  searchFreecompany(name: string, server: string, cpt: number) : Observable<any> {
    let searchUrl = `${this.apiBaseUrl}/freecompany/search?name=${name}&server=${server}&page=${cpt}`;
    this.loadingService.setLoading(true);
    return this._HttpClient.get(searchUrl).pipe(
      finalize(() => this.loadingService.setLoading(false)) // Mettre l'état de chargement à false après avoir reçu les données
    );
  }

  getFreecompany(id: string | null) : Observable<any> {
    const url = `${this.apiBaseUrl}/freecompany/${id}?data=FCM`;
    this.loadingService.setLoading(true); // Mettre l'état de chargement à true avant la requête
    return this._HttpClient.get<FreeCompany>(url).pipe(
      finalize(() => this.loadingService.setLoading(false)) // Mettre l'état de chargement à false après avoir reçu les données
    );
  }

  getCharacter(id: string | null) : Observable<any> {
    const url = `${this.apiBaseUrl}/character/${id}`;
    this.loadingService.setLoading(true); // Mettre l'état de chargement à true avant la requête
    return this._HttpClient.get<Character>(url).pipe(
      finalize(() => this.loadingService.setLoading(false)) // Mettre l'état de chargement à false après avoir reçu les données
    );
  }

}

export const FreecompanyResolver: ResolveFn<FreeCompany> =
  (route: ActivatedRouteSnapshot) => {
    return inject(FreecompanyService).getFreecompany(route.paramMap.get('id'))
}

export const CharacterResolver: ResolveFn<Character> =
  (route: ActivatedRouteSnapshot) => {
    return inject(CharacterService).getCharacter(route.paramMap.get('id'))
}

