import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreecompanyResolver } from 'src/app/shared/services/freecompany/freecompany.service';
import { FreeCompanyDetailComponent } from './free-company-detail/free-company-detail.component';
import { FreeCompanySearchComponent } from './free-company-search/free-company-search.component';
import { FreeCompanyComponent } from './free-company/free-company.component';

const routes: Routes = [
  {path: '', component: FreeCompanyComponent, children: [
    {path: '', component: FreeCompanySearchComponent},
    {path: ':id', component: FreeCompanyDetailComponent, resolve: {freeCompany: FreecompanyResolver}}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreeCompanyRoutingModule { }
