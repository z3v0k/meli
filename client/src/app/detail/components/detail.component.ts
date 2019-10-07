import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [
    `
      img {
        height: 280px;
      }
      .desc-text {
        font-size: 14px;
      }
    `
  ]
})
export class DetailComponent {
  @Input() data: IDetail;
}
