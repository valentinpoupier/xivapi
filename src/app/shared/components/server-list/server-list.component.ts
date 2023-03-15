import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface DataCenter {
  Name: string;
  Worlds: {
    ID: number;
    Name: string;
  }[];
}

interface World {
  ID: number;
  Name: string;
  DataCenter: {
    Name: string;
  };
}

interface GroupedData {
  [key: string]: {
    Name: string;
    Worlds: {
      ID: number;
      Name: string;
    }[];
  };
}



@Component({
  selector: 'app-server-list',
  template: `
    <select>
      <optgroup *ngFor="let dc of dataCenters" [label]="dc.Name">
        <option *ngFor="let world of dc.Worlds" [value]="world.ID">{{world.Name}}</option>
      </optgroup>
    </select>
  `,
})
export class ServerListComponent implements OnInit {
  dataCenters: DataCenter[] = [];

  ngOnInit() {
    axios
      .get('https://xivapi.com/WorldStatus')
      .then((response) => {
        const data = response.data;
        const groupedData : GroupedData = {};
        data.forEach((world: World) => {
          if (!groupedData[world.DataCenter.Name]) {
            groupedData[world.DataCenter.Name] = {
              Name: world.DataCenter.Name,
              Worlds: []
            };
          }
          if (Array.isArray(groupedData[world.DataCenter.Name].Worlds)) {
            groupedData[world.DataCenter.Name].Worlds.push({
              ID: world.ID,
              Name: world.Name,
            });
          }
        });
        for (const dcName in groupedData) {
          const dcData = {
            Name: dcName,
            Worlds: groupedData[dcName],
          };
          this.dataCenters.push({
            Name: dcData.Name,
            Worlds: dcData.Worlds.Worlds
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
