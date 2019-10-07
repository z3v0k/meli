import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [
    `
      img {
        width: 100%;
      }
    `
  ]
})
export class ItemComponent {
  @Input() item: IItem;
}
