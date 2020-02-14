import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { SimplSiShellMobileNgModule } from '@simpl/sishell-mobile-ng';

import { ServerStatusPage } from './server-status.page';

const routes: Routes = [
  {
    path: '',
    component: ServerStatusPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimplSiShellMobileNgModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServerStatusPage]
})
export class ServerStatusPageModule { }
