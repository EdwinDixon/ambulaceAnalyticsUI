import { AmbulanceuiPage } from './app.po';

describe('ambulanceui App', () => {
  let page: AmbulanceuiPage;

  beforeEach(() => {
    page = new AmbulanceuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
