import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HEROESMOCKDATA} from '../mock-data/mock-heroes';
import {Hero} from '../models/hero';
import {MessageService} from './message.service';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class HeroService {
    private heroesUrl = 'api/heroes';  // URL to web api

    private httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(
        //inietto la classe "MessageService" e la immagazzino dentro la
        // variabile messageService
        private messageService: MessageService,
        private http: HttpClient
    ) {
    }

    //funzione che poi potrò richiamare dal controller
    getHeroes(): Observable<Hero[]> { //
        //return this.http.get('url-con-i-dati)  -> qst se avro una url per un API
        return this.http.get<Hero[]>(this.heroesUrl)
            //gestione dell'errore
            .pipe(
                tap(() => this.log("Heroservice: fetched heroes")),
                catchError(error => {
                    console.error(error);
                    this.log(`getHero failed: ${error.message}`);
                    let response = [] as Hero[];
                    return of(response);
                })
            );
        //  this.log("Heroservice: fetched heroes");
        // return HEROES;
    }

    getHero(selectedId: number): Observable<Hero> {
        // For now, assume that a hero with the specified `id` always exists.
        // Error handling will be added in the next step of the tutorial.
        //const HERO = HEROESMOCKDATA.find(h => h.id === selectedId)!;
        //this.log(`fetched hero id=${selectedId}`);
        //return of(HERO);
        return this.http.get<Hero>(this.heroesUrl + '/' + selectedId)
            .pipe(
                tap(_ => this.log(`fetched hero id = ${selectedId}`)),
                catchError(error => {
                    this.log(`getHero id = ${selectedId} failed ${error.status}: ${error.body.error}`);
                    return of();
                })
            );
    }

    /** PUT: update the hero on the server */
    updateHero(hero: Hero): Observable<any> {
        return this.http.put(this.heroesUrl, hero, this.httpOptions)
            .pipe(
                tap(_ => this.log(`updated hero id=${hero.id}`)),
                catchError(error => {
                    console.error(error);
                    this.log(`updateHero failed: ${error.message}`);
                    let response = [] as Hero[];
                    return of(response);
                })
            );
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }


    // /**
    //  * Handle Http operation that failed.
    //  * Let the app continue.
    //  * @param operation - name of the operation that failed
    //  * @param result - optional value to return as the observable result
    //  */
    // private handleError<T>(operation = 'operation', result?: T) {
    //   return (error: any): Observable<T> => {
    //     // TODO: send the error to remote logging infrastructure
    //     console.error(error); // log to console instead
    //     // TODO: better job of transforming error for user consumption
    //     this.log(`${operation} failed: ${error.message}`);
    //     // Let the app keep running by returning an empty result.
    //     return of(result as T);
    //   };
    // }
}
