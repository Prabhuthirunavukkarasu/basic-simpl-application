import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SimplSiShellMobileNgModule } from '@simpl/sishell-mobile-ng';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ]),
    SimplSiShellMobileNgModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
