import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trueCharacter } from 'src/app/shared/models/character';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  isLoading: boolean = false;

  character : trueCharacter = this._activatedRoute.snapshot.data['character']

  gender : string = ''

  errorMessage : string = ''

  constructor(private _activatedRoute: ActivatedRoute, private loadingService: LoadingService, private _router : Router) {
    if(this.character.Character.Gender === 1) {
      this.gender = '♂'
    } else {
      this.gender = '♀'
    }
    console.log(this.character);

  }

  ngOnInit(): void {
    this.loadingService.getLoading().subscribe(loading => this.isLoading = loading);
  }
  
  back() {
    window.history.back();
  }

  viewFreeCompany(id : string) {
    this._router.navigate(['../free-company', id]);
  }

}
