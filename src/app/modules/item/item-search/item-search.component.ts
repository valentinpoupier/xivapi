import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemList } from 'src/app/shared/models/itemlist';
import { ItemService } from 'src/app/shared/services/item/item.service';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.scss']
})
export class ItemSearchComponent implements OnInit {

  router : Router = this._router;

  isLoading: boolean = false;

  constructor(private _itemService : ItemService, private _router : Router, private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.getLoading().subscribe(loading => this.isLoading = loading);
  }

  items : ItemList = {
    Pagination: {
      Page: 0,
      PageNext: 0,
      PagePrev: 0,
      PageTotal: 0,
      Results: 0,
      ResultsPerPage: 0,
      ResultsTotal: 0
    },
    Results: [],
    SpeedMs: 0
  }

  name : string = '';

  page : number = 1;

  nbrOfPages : number[] = [];

  id : number = 0;

  isEmpty() : boolean {
    return this.items.Results.length == 0;
  }

  search() {
    this._itemService.searchItem(this.name, this.page).subscribe((data : ItemList) => {
      this.items = data;
      this.nbrOfPages = [];
      for (let i = 1; i <= this.items.Pagination.PageTotal; i++) {
        this.nbrOfPages.push(i);
      }
    })
    console.log(this.items);
  }

  viewItem(id : number) {
    this._router.navigate(['/item', id]);
  }

  nextPage() {
    this.page++;
    this.search();
  }

  prevPage() {
    this.page--;
    this.search();
  }

  goToPage(page : number) {
    this.page = page;
    this.search();
  }

}
