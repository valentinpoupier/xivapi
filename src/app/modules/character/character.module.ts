import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterRoutingModule } from './character-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterSearchComponent } from './character-search/character-search.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterComponent } from './character/character.component';
import { MinionComponent } from './character-detail/minion/minion.component';
import { MountComponent } from './character-detail/mount/mount.component';
import { GearComponent } from './character-detail/gear/gear.component';


@NgModule({
  declarations: [
    CharacterSearchComponent,
    CharacterDetailComponent,
    CharacterComponent,
    MinionComponent,
    MountComponent,
    GearComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule
  ]
})
export class CharacterModule { }
