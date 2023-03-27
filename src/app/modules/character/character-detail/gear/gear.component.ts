import { Component, Input } from '@angular/core';
import { GearSet } from 'src/app/shared/models/character';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.scss']
})
export class GearComponent {

  @Input() gear! : GearSet;

}
