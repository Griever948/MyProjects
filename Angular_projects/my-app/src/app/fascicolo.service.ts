import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Fascicolo } from './fascicolo';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class FascicoloService {

  private fascicoliUrl = 'api/fascicoli'; // URL to web api

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add('FascicoloService: ' + message);
  }

  /** GET fascicoli from the server */
  getFascicoli(): Observable<Fascicolo[]> {
    return this.http.get<Fascicolo[]>(this.fascicoliUrl)
      .pipe(
      tap(fascicoli => this.log(`fetched fascicoli`)),
      catchError(this.handleError('getFascicoli', []))
      );
  }

  /** GET documnento by id. Will 404 if id not found */
  getFascicolo(id: number): Observable<Fascicolo> {
    const url = `${this.fascicoliUrl}/${id}`;
    return this.http.get<Fascicolo>(url).pipe(
      tap(_ => this.log(`fetched fascicolo id=${id}`)),
      catchError(this.handleError<Fascicolo>(`getFascicolo id=${id}`))
    );
  }

  getFascicoloByName(name: string): Observable<Fascicolo> {
    const url = `${this.fascicoliUrl}/${name}`;
    return this.http.get<Fascicolo>(url).pipe(
      tap(_ => this.log(`fetched fascicolo id=${name}`)),
      catchError(this.handleError<Fascicolo>(`getFascicolo id=${name}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
