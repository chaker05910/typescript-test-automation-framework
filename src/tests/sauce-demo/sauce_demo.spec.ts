import { test } from '../../config/fixtures';
import { LoginPage } from '../../pages/sauce-demo/login-page';
import { InventoryPage } from '../../pages/sauce-demo/inventory-page';
import { CartPage } from '../../pages/sauce-demo/cart-page';
import { CheckoutPage } from '../../pages/sauce-demo/checkout-page';
import { CheckoutStepTwoPage } from '../../pages/sauce-demo/checkout-step-two-page';
import { CheckoutCompletePage } from '../../pages/sauce-demo/checkout-complete-page';

test.describe('Shopping Test', () => {
  const username = 'standard_user';
  const password = 'secret_sauce';

  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;
  let checkoutStepTwoPage: CheckoutStepTwoPage;
  let checkoutCompletePage: CheckoutCompletePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    checkoutStepTwoPage = new CheckoutStepTwoPage(page);
    checkoutCompletePage = new CheckoutCompletePage(page);

    await loginPage.navigate();
    await loginPage.enterUsername(username);
    await loginPage.enterPassword(password);
    await loginPage.clickLogin();
  });

  test('Shopping End to End Test', async () => {
    await inventoryPage.clickBikeLightAddToCart();
    await inventoryPage.clickBackpackAddToCart();
    await inventoryPage.clickOnesieAddToCart();
    await inventoryPage.clickShopingCart();

    await cartPage.clickBackpackRemove();
    await cartPage.clickCheckout();

    await checkoutPage.enterFirstName("Joe");
    await checkoutPage.enterLastName("Doe");
    await checkoutPage.enterZipCode("12345");
    await checkoutPage.clickContinue();

    await checkoutStepTwoPage.clickFinish();
    
    await checkoutCompletePage.verifyCompleteHeaderText();
  });
});
