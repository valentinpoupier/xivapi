import { Component, Input, OnInit } from '@angular/core';
import { Mount } from 'src/app/shared/models/character';

@Component({
  selector: 'app-mount',
  templateUrl: './mount.component.html',
  styleUrls: ['./mount.component.scss']
})
export class MountComponent implements OnInit {

  ngOnInit(): void {
    this.lenght = this.mounts.length;
  }

  @Input() mounts : Mount[] = []

  lenght : number = 0;
}
