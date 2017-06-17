import { FromScratch01Page } from './app.po';

describe('from-scratch01 App', () => {
  let page: FromScratch01Page;

  beforeEach(() => {
    page = new FromScratch01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
