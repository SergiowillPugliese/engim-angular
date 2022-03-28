import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { HEROESMOCKDATA } from '../mock-data/mock-heroes';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const HERO: Observable<Hero[]> = of (HEROESMOCKDATA).pipe(delay(1000));
    this.messageService.add('HeroService: fetched heroes')
    return HERO;
  }
}
