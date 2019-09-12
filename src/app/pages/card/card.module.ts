import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SimplSiShellMobileNgModule } from '@simpl/sishell-mobile-ng';

import { IonicModule } from '@ionic/angular';

import { CardPage } from './card.page';

const routes: Routes = [
  {
    path: '',
    component: CardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SimplSiShellMobileNgModule
  ],
  declarations: [CardPage]
})
export class CardPageModule {}
