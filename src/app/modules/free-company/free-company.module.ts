import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreeCompanyRoutingModule } from './free-company-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FreeCompanySearchComponent } from './free-company-search/free-company-search.component';
import { FreeCompanyDetailComponent } from './free-company-detail/free-company-detail.component';
import { FreeCompanyComponent } from './free-company/free-company.component';


@NgModule({
  declarations: [
    FreeCompanySearchComponent,
    FreeCompanyDetailComponent,
    FreeCompanyComponent
  ],
  imports: [
    CommonModule,
    FreeCompanyRoutingModule,
    SharedModule
  ]
})
export class FreeCompanyModule { }
