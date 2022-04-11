import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor() { }

  //funzione che poi potrò richiamare dal controller
  getRandomJoke(): Observable<Joke[]> { //
    //return this.http.get('url-con-i-dati)  -> qst se avro una url per un API
    const HEROES = this.http.get<Hero[]>(this.heroesUrl);
    this.log("Heroservice: fetched heroes");
    return HEROES;
  }

}
