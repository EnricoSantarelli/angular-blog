import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
