import { Component, OnInit } from '@angular/core';
import { HEROESMOCKDATA } from 'src/app/mock-data/mock-heroes';
import { Hero } from 'src/app/models/hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // Variabli che passo alla view
  heroes: Hero[] = HEROESMOCKDATA;
  selectedHero?: Hero;
  pippo = this.selectedHero != undefined && this.selectedHero.name == 'Bombasto';
  // END: Variabli che passo alla view

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(pippo: Hero) {
    this.selectedHero = pippo;
  }
}
