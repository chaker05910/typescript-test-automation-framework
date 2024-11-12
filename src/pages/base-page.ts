import { Locator, Page } from '@playwright/test';
import { By } from '../utils/by';
import { ByFrame } from '../utils/by-frame';

export class BasePage {
  protected page: Page;
  protected by: By;

  constructor(page: Page) {
    this.page = page;
    this.by = new By(page);
  }

  public async navigate() {
    await this.page.goto(process.env.BASE_URL!);
  }

  public async isElementEnabled(element: Locator, timeout: number = 5000): Promise<boolean> {
    try {
      await this.page.waitForLoadState('domcontentloaded', { timeout });
      await element.waitFor({ timeout: timeout, state: 'visible' });
      return await element.isEnabled();
    } catch {
      return false;
    }
  }

  public async waitForResponse(include: string) {
    await this.page.waitForResponse((request) => request.url().includes(include));
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(1000);
  }

  /*
  Usage: 
  
  private frame = this.getFrame('#iFrame');
  private emailInput = this.frame.id('email');
  */
  public getFrame(frameSelector: string): ByFrame {
    return new ByFrame(this.page, frameSelector);
  }
}
