import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterRoutingModule } from './character-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterSearchComponent } from './character-search/character-search.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';


@NgModule({
  declarations: [
    CharacterSearchComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule
  ]
})
export class CharacterModule { }
