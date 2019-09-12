import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'about.component.html'
})
export class AboutComponent {
  licenseText: any;
  appVersion = '0.0.1';
  appHash = 'd5c9bc5f';

  constructor(http: HttpClient) {
    this.licenseText = http.get('assets/oss/oss.txt', {responseType: 'text'});
  }
}
