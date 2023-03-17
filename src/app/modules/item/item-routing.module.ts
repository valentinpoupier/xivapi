import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemSearchComponent } from './item-search/item-search.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {path: '', component: ItemComponent, children: [
    {path: '', component: ItemSearchComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
