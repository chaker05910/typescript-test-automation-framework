import { BasePage } from './../base-page';

export class InventoryPage extends BasePage {
  private backpackAddToCartButton = this.by.id("add-to-cart-sauce-labs-backpack");
  private bikeLightAddToCartButton = this.by.id("add-to-cart-sauce-labs-bike-light");
  private onesieAddToCartButton = this.by.id("add-to-cart-sauce-labs-onesie");
  private shopingCartButton = this.by.xpath("//a[@data-test='shopping-cart-link']");

  public async clickBackpackAddToCart() {
    await this.backpackAddToCartButton.click();
  }

  public async clickBikeLightAddToCart() {
    await this.bikeLightAddToCartButton.click();
  }

  public async clickOnesieAddToCart() {
    await this.onesieAddToCartButton.click();
  }

  public async clickShopingCart() {
    await this.shopingCartButton.click();
  }
}
