import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToolbarComponent, BreadcrumbComponent } from '@meli/core/components';

import { AppComponent } from '@meli/core/containers';
import { ReactiveFormsModule } from '@angular/forms';

export const COMPONENTS = [AppComponent, ToolbarComponent, BreadcrumbComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {}
