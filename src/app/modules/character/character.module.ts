import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character/character.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServerListComponent } from 'src/app/shared/components/server-list/server-list.component';


@NgModule({
  declarations: [
    CharacterComponent,
    ServerListComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule
  ]
})
export class CharacterModule { }
