import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  item = true;
  company = true;
  character = true;
  lore = true;

  invertItem() {
    this.item = !this.item;
  }

  invertCompany() {
    this.company = !this.company;
  }

  invertCharacter() {
    this.character = !this.character;
  }

  invertLore() {
    this.lore = !this.lore;
  }

}
