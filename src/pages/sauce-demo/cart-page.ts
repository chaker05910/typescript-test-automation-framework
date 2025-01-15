import { BasePage } from './../base-page';

export class CartPage extends BasePage {
  private backpackRemoveButton = this.by.id("remove-sauce-labs-backpack");
  private checkoutButton = this.by.id("checkout");

  public async clickBackpackRemove() {
    await this.backpackRemoveButton.click();
  }

  public async clickCheckout() {
    await this.checkoutButton.click();
  }
}
