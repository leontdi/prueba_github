import { PruebagithubPage } from './app.po';

describe('pruebagithub App', () => {
  let page: PruebagithubPage;

  beforeEach(() => {
    page = new PruebagithubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
