import { Component, Input, OnInit } from '@angular/core';
import { Minion } from 'src/app/shared/models/character';

@Component({
  selector: 'app-minion',
  templateUrl: './minion.component.html',
  styleUrls: ['./minion.component.scss']
})
export class MinionComponent implements OnInit {

  @Input() minions : Minion[] = []

  lenght : number = 0;

  constructor() {}
  ngOnInit(): void {
    this.lenght = this.minions.length;
  }

}
