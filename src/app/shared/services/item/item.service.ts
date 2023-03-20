import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../loading/loading.service';
import { Item } from '../../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiBaseUrl = 'https://xivapi.com';

  constructor(private _HttpClient: HttpClient, private loadingService: LoadingService) { }

  searchItem(name: string, cpt: number) : Observable<any> {
    let searchUrl = `${this.apiBaseUrl}/search?string=${name}&page=${cpt}&indexes=item`;
    this.loadingService.setLoading(true); // Mettre l'état de chargement à true avant la requête
    return this._HttpClient.get(searchUrl).pipe(
      finalize(() => this.loadingService.setLoading(false)) // Mettre l'état de chargement à false après avoir reçu les données
    );
  }

  getItem(id: string | null) : Observable<any> {
    const url = `${this.apiBaseUrl}/item/${id}`;
    this.loadingService.setLoading(true); // Mettre l'état de chargement à true avant la requête
    return this._HttpClient.get(url).pipe(
      finalize(() => this.loadingService.setLoading(false)) // Mettre l'état de chargement à false après avoir reçu les données
    );
  }
}

export const ItemResolver: ResolveFn<Item> =
  (route: ActivatedRouteSnapshot) => {
    return inject(ItemService).getItem(route.paramMap.get('id'))
}
