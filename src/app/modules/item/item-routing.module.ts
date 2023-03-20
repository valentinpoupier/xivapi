import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemResolver } from 'src/app/shared/services/item/item.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemSearchComponent } from './item-search/item-search.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {path: '', component: ItemComponent, children: [
    {path: '', component: ItemSearchComponent},
    {path: ':id', component: ItemDetailComponent, resolve: {item: ItemResolver}}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
