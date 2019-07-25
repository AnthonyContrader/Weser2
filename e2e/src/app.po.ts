import { browser, by, element } from 'protractor';

export class AppPage {
 
  private credentias = {
    username: 'admin ',
    password: 'admin'
  };

  navigateTo() {
    return browser.get('/login');
  }

  fillCredentials(credentias: any = this.credentias) {
    element(by.css('[name="username"]')).sendKeys(credentias.username);
    element(by.css('[name="password"]')).sendKeys(credentias.password);
    //element(by.css('login(f)')).click();
    element(by.id('buttonlogin')).click();
  }

  getPageTitleText() {
    return element(by.tagName('app-admin-dashboard')).getText();
  }

  getErrorMessage() {
    return element(by.css('.alert-danger')).getText();
  }
}