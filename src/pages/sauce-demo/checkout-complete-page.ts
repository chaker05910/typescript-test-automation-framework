import { expect } from '@playwright/test';
import { BasePage } from './../base-page';

export class CheckoutCompletePage extends BasePage {
  private completeHeaderText = this.by.xpath("//h2[@data-test='complete-header']");

  public async verifyCompleteHeaderText() {
    await expect(this.completeHeaderText).toHaveText(`Thank you for your order!`);
  }
}
