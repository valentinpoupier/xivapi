import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trueCharacter } from 'src/app/shared/models/character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {

  character : trueCharacter = this._activatedRoute.snapshot.data['character']

  gender : string = ''

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) {
    if(this.character.Character.Gender === 1) {
      this.gender = '♂'
    } else {
      this.gender = '♀'
    }
    console.log(this.character);

   }

}
