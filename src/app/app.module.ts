import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './pages/home-page/home-page.module';
import { ThemePageModule } from './pages/theme-page/theme-page.module';
import { ComponentsModule } from './shared/components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    ThemePageModule,
    ComponentsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
