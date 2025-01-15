import { BasePage } from '../base-page';

export class CheckoutStepTwoPage extends BasePage {
  private finishButton = this.by.id("finish");
 
  public async clickFinish() {
    await this.finishButton.click();
  }
}
