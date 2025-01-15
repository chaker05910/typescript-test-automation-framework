import { BasePage } from './../base-page';

export class CheckoutPage extends BasePage {
  private firstNameInput = this.by.id("first-name");
  private lastNameInput = this.by.id("last-name");
  private zipCodeInput = this.by.id("postal-code");
  private continueButton = this.by.id("continue");

  public async enterFirstName(first: string) {
    await this.firstNameInput.fill(first);
  }

  public async enterLastName(last: string) {
    await this.lastNameInput.fill(last);
  }

  public async enterZipCode(zip: string) {
    await this.zipCodeInput.fill(zip);
  }

  public async clickContinue() {
    await this.continueButton.click();
  }
}
