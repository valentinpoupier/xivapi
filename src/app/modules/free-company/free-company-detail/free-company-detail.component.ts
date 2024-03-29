import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FC } from 'src/app/shared/models/freecompany';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';

@Component({
  selector: 'app-free-company-detail',
  templateUrl: './free-company-detail.component.html',
  styleUrls: ['./free-company-detail.component.scss']
})
export class FreeCompanyDetailComponent implements OnInit {

  isLoading: boolean = false;

  freeCompany : FC = this._activatedRoute.snapshot.data['freeCompany'];

  isEnable : boolean = false;

  constructor(private _activatedRoute: ActivatedRoute,
    private loadingService: LoadingService,
    private _router : Router) {
    console.log(this.freeCompany);
  }

  ngOnInit(): void {
    this.loadingService.getLoading().subscribe(loading => this.isLoading = loading);
  }

  back() {
    window.history.back();
  }
  getCharacterById(id : number) {
    this._router.navigate(['../character', id]);
  }

  invertEnable() {
    this.isEnable = !this.isEnable;
  }

}
