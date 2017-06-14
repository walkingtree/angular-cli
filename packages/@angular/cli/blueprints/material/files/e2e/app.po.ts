import { browser, by, element } from 'protractor';

export class <%= jsComponentName %>Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('<%= prefix %>-root md-card md-card-title')).getText();
  }
}
