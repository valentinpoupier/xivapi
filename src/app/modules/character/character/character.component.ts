import { Component, OnInit } from '@angular/core';
import { CharacterList } from 'src/app/shared/models/characterlist';
import { CharacterService } from 'src/app/shared/services/character/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  constructor(private _characterService : CharacterService) { }

  groupes = [
    { nom: 'Aether', options: ['Adamantoise', 'Cactuar', 'Faerie', 'Gilgamesh', 'Jenova', 'Midgardsormr', 'Sargatanas', 'Siren'] },
    { nom: 'Chaos', options: ['Cerberus', 'Louisoix', 'Moogle', 'Omega', 'Phantom', 'Ragnarok', 'Sagittarius', 'Spriggan'] },
    { nom: 'Crystal', options: ['Balmung', 'Brynhildr', 'Coeurl', 'Diabolos', 'Goblin', 'Malboro', 'Mateus', 'Zalera'] },
    { nom: 'Dynamis', options: ['Halicarnassus', 'Maduin', 'Marilith', 'Seraph'] },
    { nom: 'Elemental', options: ['Aegis', 'Atomos', 'Carbuncle', 'Garuda', 'Gungnir', 'Kujata', 'Tonberry', 'Typhon'] },
    { nom: 'Gaia', options: ['Alexander', 'Bahamut', 'Durandal', 'Fenrir', 'Ifrit', 'Ridill', 'Tiamat', 'Ultima'] },
    { nom: 'Korea', options: ['\ucd08\ucf54\ubcf4', '\ubaa8\uadf8\ub9ac', '\uce74\ubc99\ud074', '\ud1a4\ubca0\ub9ac', '\ud39c\ub9ac\ub974'] },
    { nom: 'Light', options: ['Alpha', 'Lich', 'Odin', 'Phoenix', 'Raiden', 'Shiva', 'Twintania', 'Zodiark'] },
    { nom: 'Mana', options: ['Anima', 'Asura', 'Chocobo', 'Hades', 'Ixion', 'Masamune', 'Pandaemonium', 'Titan'] },
    { nom: 'Materia', options: ['Bismarck', 'Ravana', 'Sephirot', 'Sophia', 'Zurvan'] },
    { nom: 'Meteor', options: ['Belias', 'Mandragora', 'Ramuh', 'Shinryu', 'Unicorn', 'Valefor', 'Yojimbo', 'Zeromus'] },
    { nom: 'Primal', options: ['Behemoth', 'Excalibur', 'Exodus', 'Famfrit', 'Hyperion', 'Lamia', 'Leviathan', 'Ultros'] },
    { nom: '\u732b\u5c0f\u80d6', options: ['ZiShuiZhanQiao', 'YanXia', 'JingYuZhuangYuan',"MoDuNa","HaiMaoChaWu","RouFengHaiWan","HuPoYuan"]},
    { nom: "\u83ab\u53e4\u529b", options: ["BaiYinXiang","BaiJinHuanXiang","ShenQuanHen","ChaoFengTing","LvRenZhanQiao","FuXiaoZhiJian","Longchaoshendian","MengYuBaoJing"]},
    { nom: "\u8c46\u8c46\u67f4", options: ["ShuiJingTa2","YinLeiHu2","TaiYangHaiAn2","YiXiuJiaDe2","HongChaChuan2"]},
    { nom: "\u9646\u884c\u9e1f", options: ["HongYuHai","ShenYiZhiDi","LaNuoXiYa","HuanYingQunDao","MengYaChi","YuZhouHeYin","WoXianXiRan","ChenXiWangZuo"]}]


  characters: CharacterList= {
    Pagination: {
      Page: 0,
      PageNext: 0,
      PagePrev: 0,
      PageTotal: 0,
      Results: 0,
      ResultsPerPage: 0,
      ResultsTotal: 0
    },
    Results: []
  };


  name : string = '';

  server : string = 'Zodiark';

  cpt : number = 0;

  ngOnInit(): void {

  }


  search() {
    this._characterService.searchCharacter(this.name, this.server, this.cpt)
      .subscribe((data: CharacterList | any) => {
        this.characters = data;
        this.characters.Pagination.PageNext = data.Pagination.PageNext
      });

  }

  nextPage() {
    this.cpt++;
    this.search();
  }

  previousPage() {
    this.cpt--;
    this.search();
  }
}

