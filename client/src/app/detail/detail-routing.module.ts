import { NgModule } from '@angular/core';
import { DetailPageComponent } from './containers/detail-page.component';
import { RouterModule, Routes } from '@angular/router';

export const DetailDefaultRoutes: Routes = [
  {
    path: '',
    component: DetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(DetailDefaultRoutes)],
  exports: [RouterModule]
})
export class DetailRoutingModule {}
