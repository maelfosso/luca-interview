import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Publication } from '../_models/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private publicationsUrl = 'api/publications';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.publicationsUrl)
      .pipe(
        catchError(this.handleError<Publication[]>('getPublications', []))
      );
  }

  getPublication(id: number): Observable<Publication> {
    const url = `${this.publicationsUrl}/${id}`;
    return this.http.get<Publication>(url).pipe(
      catchError(this.handleError<Publication>(`getPublication id=${id}`))
    );
  }

  addPublication(publication: Publication): Observable<Publication> {
    return this.http.post<Publication>(this.publicationsUrl, publication, this.httpOptions).pipe(
      catchError(this.handleError<Publication>('addPublication'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); 
  
      return of(result as T);
    };
  }

}
