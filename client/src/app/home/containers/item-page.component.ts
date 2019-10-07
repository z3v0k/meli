import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-item-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-item [item]="item"></app-item>
  `
})
export class ItemPageComponent {
  @Input() item: IItem;
}
