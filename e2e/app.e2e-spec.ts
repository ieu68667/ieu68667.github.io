import { Ieu68667.Github.IoPage } from './app.po';

describe('ieu68667.github.io App', () => {
  let page: Ieu68667.Github.IoPage;

  beforeEach(() => {
    page = new Ieu68667.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
