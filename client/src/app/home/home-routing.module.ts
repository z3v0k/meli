import { NgModule } from '@angular/core';
import { HomePageComponent } from './containers/home-page.component';
import { RouterModule, Routes } from '@angular/router';

export const HomeDefaultRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(HomeDefaultRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
