import { BasePage } from './../base-page';

export class HomePage extends BasePage {
  private sampleAppButton = this.by.text('Sample App');

  public async navigate() {
    await this.page.goto(process.env.PLAYGROUND_BASE_URL!);
  }
  
  public async clickSampleApp() {
    await this.sampleAppButton.click();
  }
}
