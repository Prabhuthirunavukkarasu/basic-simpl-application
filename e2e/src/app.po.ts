import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(destination) {
    return browser.get(destination) as Promise<any>;
  }

  getPageOneTitleText() {
    return element(
        by.tagName('app-home')
      ).element(by.deepCss('ion-title')).getText() as Promise<string>;
  }
}
