import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private url = 'http://localhost:3000/api';

  private querySubject = new BehaviorSubject<string>('');
  private categoriesSubject = new BehaviorSubject<Array<ICategories>>([]);

  constructor(private httpClient: HttpClient) {}

  getQueryInput(): Observable<string> {
    return this.querySubject.asObservable();
  }

  setQueryInput(q: string): void {
    this.querySubject.next(q);
  }

  getItemCategories(): Observable<Array<ICategories>> {
    return this.categoriesSubject.asObservable();
  }

  setItemCategories(categories: Array<ICategories>): void {
    this.categoriesSubject.next(categories);
  }

  query({ q }): Observable<IQuery> {
    return this.httpClient
      .get<IQuery>(`${this.url}/items?q=${q.query}`)
      .pipe(take(4));
  }

  detail(id: string): Observable<IDetail> {
    return this.httpClient.get<IDetail>(`${this.url}/items/${id}`);
  }
}
