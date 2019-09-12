import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  constructor(
    private toastController: ToastController,
    private router: Router
  ) { }

  async signIn(form: any) {
    const success = await this.toastController.create({
      message: 'Logged in successfully!',
      duration: 2000
    });
    const failed = await this.toastController.create({
      message: 'Invalid credentials!',
      duration: 2000
    });
    const notEntered = await this.toastController.create({
      message: 'Please enter credentials.',
      duration: 2000
    });
    if (form.username && form.password) {
      if (form.username == 'admin' && form.password == 'admin') {
        success.present();
        this.router.navigate(['/home']);
      } else {
        failed.present();
      }
    } else {
      notEntered.present();
    }
  }

  forgotPassword() {
    this.router.navigate(['/home']);
  }

  signUp() {
    this.router.navigate(['/home']);
  }

  info() {
    this.router.navigate(['/about']);
  }
}
