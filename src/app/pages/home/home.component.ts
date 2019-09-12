import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {

  constructor(private router: Router) { }

  gotoLogin() {
    this.router.navigate(['/login']);
  }
  gotoAccordion() {
    this.router.navigate(['/accordion']);
  }
  gotoAbout() {
    this.router.navigate(['/about']);
  }
  gotoSlider() {
    this.router.navigate(['/slider']);
  }
  gotoCard() {
    this.router.navigate(['/card']);
  }

}
