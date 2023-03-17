import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterRoutingModule } from './character-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterSearchComponent } from './character-search/character-search.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterComponent } from './character/character.component';
import { CharacterClassjobComponent } from './character-detail/character-classjob/character-classjob.component';


@NgModule({
  declarations: [
    CharacterSearchComponent,
    CharacterDetailComponent,
    CharacterComponent,
    CharacterClassjobComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule
  ]
})
export class CharacterModule { }
