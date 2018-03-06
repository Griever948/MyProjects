import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Documento } from './documento';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class DocumentoService {

  private documentiUrl = 'api/documenti'; // URL to web api

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add('DocumentoService: ' + message);
  }

  /** GET documenti from the server */
  getDocumenti(): Observable<Documento[]> {
    return this.http.get<Documento[]>(this.documentiUrl)
      .pipe(
      tap(documenti => this.log(`fetched documenti`)),
      catchError(this.handleError('getDocumenti', []))
      );
  }

  /** GET documnento by id. Will 404 if id not found */
  getDocumento(id: number): Observable<Documento> {
    const url = `${this.documentiUrl}/${id}`;
    return this.http.get<Documento>(url).pipe(
      tap(_ => this.log(`fetched documento id=${id}`)),
      catchError(this.handleError<Documento>(`getDocumento id=${id}`))
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
