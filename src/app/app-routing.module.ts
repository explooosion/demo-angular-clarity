import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './routes/home/home.component';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { BadgesComponent } from './components/badges/badges.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Clarity' },
  },
  {
    path: 'alert',
    component: AlertComponent,
    data: { title: 'Clarity Alert' },
  },
  {
    path: 'badges',
    component: BadgesComponent,
    data: { title: 'Clarity Badges' },
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
    data: { title: 'Clarity Buttons' },
  },
  {
    path: 'button-group',
    component: ButtonGroupComponent,
    data: { title: 'Clarity Button Group' },
  },
  {
    path: 'cards',
    component: CardsComponent,
    data: { title: 'Clarity Cards' },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
