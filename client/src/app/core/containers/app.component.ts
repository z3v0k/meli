import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <app-toolbar></app-toolbar>
    <div class="container">
      <app-breadcrumb [data]="categories$ | async"></app-breadcrumb>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent implements OnInit {
  categories$: Observable<Array<ICategories>>;

  constructor(private service: Service) {}

  ngOnInit() {
    this.categories$ = this.service
      .getItemCategories()
      .pipe(filter(e => e !== null));
  }
}
