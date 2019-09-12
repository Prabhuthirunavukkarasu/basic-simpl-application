import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then(m => m.CardPageModule)
  },
  {
    path: 'accordion',
    loadChildren: () => import('./pages/accordion/accordion.module').then(m => m.AccordionPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./pages/slider/slider.module').then(m => m.SliderPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
