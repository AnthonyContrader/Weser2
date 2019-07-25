import { AppPage } from './app.po';

import {browser,by,element,logging} from 'protractor';

describe('protractor-tutorial - Login page', () => {
  let page: AppPage;
  let publicPage: AppPage;

  const wrongCredentias = {
    username: 'test',
    password: 'test'
  };

  beforeEach(() => {
    page = new AppPage();
    publicPage = new AppPage();
  });

  /*
  it('when user trying to login with wrong credentials he should stay on “login” page and see error notification', () => {
    page.navigateTo();
    page.fillCredentials(wrongCredentias);
    expect(page.getPageTitleText()).toEqual('work-in-progress');
    expect(page.getErrorMessage()).toEqual('Username or password is incorrect');
  });
  */

  it('when login is successful — he should redirect to default “public” page', () => {
    page.navigateTo();
    page.fillCredentials();
    //expect(publicPage.getPageTitleText()).toEqual('admin-dashboard');
    expect(true).toBe(element(by.tagName('app-admin-dashboard')).isDisplayed());
  })
});