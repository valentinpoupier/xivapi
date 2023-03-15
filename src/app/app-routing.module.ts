import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternLinkComponent } from './shared/components/extern-link/extern-link.component';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'item', loadChildren: () => import('./modules/item/item.module').then(m => m.ItemModule)},
  {path: 'character', loadChildren: () => import('./modules/character/character.module').then(m => m.CharacterModule)},
  {path: 'free-company', loadChildren: () => import('./modules/free-company/free-company.module').then(m => m.FreeCompanyModule)},
  {path: 'lore', loadChildren: () => import('./modules/lore/lore.module').then(m => m.LoreModule)},
  {path: 'extern-link', component: ExternLinkComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
