import { Feed2Page } from './app.po';

describe('feed2 App', () => {
  let page: Feed2Page;

  beforeEach(() => {
    page = new Feed2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
