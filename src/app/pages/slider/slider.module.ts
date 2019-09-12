import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SimplSiShellMobileNgModule } from '@simpl/sishell-mobile-ng';

import { IonicModule } from '@ionic/angular';

import { SliderPage } from './slider.page';

const routes: Routes = [
  {
    path: '',
    component: SliderPage
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
  declarations: [SliderPage]
})
export class SliderPageModule {}
