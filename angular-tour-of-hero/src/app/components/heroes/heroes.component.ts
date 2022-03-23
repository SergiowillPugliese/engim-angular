import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero'
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // Variabli che passo alla view
  heroes: Hero[] = [];
  selectedHero?: Hero;
  pippo = this.selectedHero != undefined && this.selectedHero.name == 'Carmelo';
  // END: Variabli che passo alla view

  constructor(private heroService: HeroService) { }

  //metodo di interfaccia LIFECYCLE HOOK
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(pippo: Hero) {
    this.selectedHero = pippo;
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    //observable
    this.heroService.getHeroes().subscribe(response => {
      this.heroes = response;
    })
  }

}
