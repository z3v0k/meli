import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Service } from '@meli/core/services/service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-detail [data]="item$ | async"></app-detail>
  `
})
export class DetailPageComponent implements OnInit {
  item$: Observable<IDetail>;

  constructor(private route: ActivatedRoute, private service: Service) {}

  ngOnInit() {
    this.item$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.service.detail(params.id);
      })
    );
  }
}
