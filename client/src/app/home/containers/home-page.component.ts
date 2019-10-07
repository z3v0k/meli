import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Service } from '@meli/core/services/service';
import { switchMap, map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-home [data]="data | async"></app-home>
  `
})
export class HomePageComponent implements OnInit {
  data: Observable<IQuery>;

  constructor(private service: Service) {}

  ngOnInit() {
    this.data = this.service.getQueryInput().pipe(
      filter(e => e !== ''),
      switchMap(q =>
        this.service.query({ q }).pipe(
          map(i => {
            this.service.setItemCategories(i.categories);
            return i;
          })
        )
      )
    );
  }
}
