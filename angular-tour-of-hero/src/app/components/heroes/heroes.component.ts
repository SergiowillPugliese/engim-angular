import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero'
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

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

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
    ) { }

  //metodo di interfaccia LIFECYCLE HOOK
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(pippo: Hero) {
    this.selectedHero = pippo;
    this.messageService.add('HeroesComponent: Selected hero id= ' + pippo.id + " and name = " + pippo.name);
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    //observable
    this.heroService.getHeroes().subscribe(response => {
      this.heroes = response;
    })
  }

}
