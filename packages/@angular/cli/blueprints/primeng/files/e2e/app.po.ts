import { browser, by, element } from 'protractor';

export class <%= jsComponentName %>Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('<%= prefix %>-root p-panel p-header div span')).getText();
  }
}
