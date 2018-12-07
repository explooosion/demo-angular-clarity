import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './routes/home/home.component';

import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { BadgesComponent } from './components/badges/badges.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    AlertComponent,
    BadgesComponent,
    ButtonsComponent,
    ButtonGroupComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
