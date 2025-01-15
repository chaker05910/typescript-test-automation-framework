import { expect } from '@playwright/test';
import { BasePage } from '../base-page';

export class SampleAppPage extends BasePage {
  private usernameInput = this.by.name('UserName');
  private passwordInput = this.by.name('Password');
  private loginButton = this.by.id('login');
  private loginStatusLabel = this.by.id('loginstatus');

  public async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  public async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  public async clickLogin() {
    await this.loginButton.click();
  }

  public async verifyStatusLoggedIn(username: string) {
    await expect(this.loginStatusLabel).toHaveText(`Welcome, ${username}!`);
  }
}
