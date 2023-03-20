import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemRoot } from 'src/app/shared/models/item';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item : ItemRoot | any = this._activatedRoute.snapshot.data['item']

  isLoading: boolean = false;

  constructor(private _activatedRoute: ActivatedRoute, private loadingService: LoadingService, private _router : Router) {
    console.log(this.item);
  }

  ngOnInit(): void {
    this.loadingService.getLoading().subscribe(loading => this.isLoading = loading);
  }

}
