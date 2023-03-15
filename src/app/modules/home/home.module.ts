import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeItemComponent } from './home-item/home-item.component';
import { HomeCharacterComponent } from './home-character/home-character.component';
import { HomeCompanyComponent } from './home-company/home-company.component';
import { HomeLoreComponent } from './home-lore/home-lore.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeItemComponent,
    HomeCharacterComponent,
    HomeCompanyComponent,
    HomeLoreComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
