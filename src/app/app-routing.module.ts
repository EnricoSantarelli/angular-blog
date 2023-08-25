import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ThemePageComponent } from './pages/theme-page/theme-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent
  },
  {
    path: 'theme/:theme',
    component: ThemePageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
