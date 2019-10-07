import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li
          class="breadcrumb-item"
          [class.active]="isLast"
          *ngFor="let breadcrumb of data; last as isLast"
        >
          <a href="#" *ngIf="!isLast">{{ breadcrumb }}</a>
          <span *ngIf="isLast">{{ breadcrumb }}</span>
        </li>
      </ol>
    </nav>
  `
})
export class BreadcrumbComponent {
  @Input() data: Array<ICategories>;
}
