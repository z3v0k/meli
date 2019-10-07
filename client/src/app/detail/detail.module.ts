import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailRoutingModule } from '@meli/detail/detail-routing.module';
import { DetailComponent } from '@meli/detail/components';

import { DetailPageComponent } from '@meli/detail/containers';

export const COMPONENTS = [DetailComponent];

export const CONTAINERS = [DetailPageComponent];

@NgModule({
  imports: [CommonModule, DetailRoutingModule],
  declarations: [COMPONENTS, CONTAINERS]
})
export class DetailModule {}
