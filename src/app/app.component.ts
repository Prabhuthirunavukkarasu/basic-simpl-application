import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'TITLE_40.HOME',
      url: '/home',
      icon: 'siveillance-home'
    },
    {
      title: 'TITLE_40.ABOUT',
      url: '/about',
      icon: 'siveillance-about'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public translate: TranslateService
  ) {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.hide();
      this.splashScreen.hide();
    });

    this.translate.setDefaultLang('en');
    this.translate.use(translate.getBrowserLang());
  }
}
