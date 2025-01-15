import { test } from '../../config/fixtures';
import { faker } from '@faker-js/faker';
import { HomePage } from '../../pages/ui-testing-playground/home-page';
import { SampleAppPage } from '../../pages/ui-testing-playground/sample-app-page';

test.describe('Sample App Test', () => {
  const username = faker.internet.username();

  let homePage: HomePage;
  let sampleAppPage: SampleAppPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    sampleAppPage = new SampleAppPage(page);

    await homePage.navigate();
    await homePage.clickSampleApp();
  });

  test('Sample App Login Test', async ({ credentials }) => {
    await sampleAppPage.fillUsername(username);
    await sampleAppPage.fillPassword(credentials.password);
    await sampleAppPage.clickLogin();
    await sampleAppPage.verifyStatusLoggedIn(username);
  });
});
