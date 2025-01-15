import { BasePage } from './../base-page';

export class LoginPage extends BasePage {
  private usernameInput = this.by.id('user-name');
  private passwordInput = this.by.id('password');
  private loginButton = this.by.id('login-button');
 
  public async navigate() {
    await this.page.goto(process.env.SAUCE_BASE_URL!);
  }

  public async enterUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  public async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  public async clickLogin() {
    await this.loginButton.click();
  }
}
