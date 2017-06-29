import { CampaignBoardPage } from './app.po';

describe('campaign-board App', () => {
  let page: CampaignBoardPage;

  beforeEach(() => {
    page = new CampaignBoardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
