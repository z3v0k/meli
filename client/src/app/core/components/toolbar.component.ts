import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Service } from '../services/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  formSearch: FormGroup = new FormGroup({
    query: new FormControl('')
  });

  constructor(private service: Service, private router: Router) {}

  query() {
    if (location.pathname.indexOf('home') !== 1) {
      this.router.navigate(['/home']);
    }

    this.service.setQueryInput(this.formSearch.value);
  }
}
