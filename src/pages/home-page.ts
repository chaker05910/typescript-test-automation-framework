import { BasePage } from './base-page';

export class HomePage extends BasePage {
  private sampleAppButton = this.by.text('Sample App');

  public async clickSampleApp() {
    await this.sampleAppButton.click();
  }
}
