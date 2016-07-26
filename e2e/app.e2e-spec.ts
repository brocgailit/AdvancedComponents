import { AdvancedPage } from './app.po';

describe('advanced App', function() {
  let page: AdvancedPage;

  beforeEach(() => {
    page = new AdvancedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
