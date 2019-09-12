import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SimplSiShellMobileNgModule } from '@simpl/sishell-mobile-ng';

import { IonicModule } from '@ionic/angular';

import { AccordionPage } from './accordion.page';

const routes: Routes = [
  {
    path: '',
    component: AccordionPage
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
  declarations: [AccordionPage]
})
export class AccordionPageModule {}
