import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from '@meli/home/home-routing.module';
import { HomeComponent, ItemComponent } from '@meli/home/components';

import { HomePageComponent, ItemPageComponent } from '@meli/home/containers';
import { CoreModule } from '@meli/core';

export const COMPONENTS = [HomeComponent, ItemComponent];

export const CONTAINERS = [HomePageComponent, ItemPageComponent];

@NgModule({
  imports: [CommonModule, CoreModule, HomeRoutingModule],
  declarations: [COMPONENTS, CONTAINERS]
})
export class HomeModule {}
