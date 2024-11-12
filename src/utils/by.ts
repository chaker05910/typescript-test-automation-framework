import { Page, Locator } from '@playwright/test';

export class By {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public xpath(selector: string): Locator {
    return this.page.locator(`xpath=${selector}`);
  }

  public css(selector: string): Locator {
    return this.page.locator(selector);
  }

  public id(id: string): Locator {
    return this.page.locator(`xpath=//*[@id="${id}"]`);
  }

  public class(className: string): Locator {
    return this.page.locator(`xpath=//*[@class="${className}"]`);
  }

  public name(name: string): Locator {
    return this.page.locator(`xpath=//*[@name="${name}"]`);
  }

  public text(text: string): Locator {
    return this.page.locator(`xpath=//*[text()="${text}"]`);
  }

  public link(link: string): Locator {
    return this.page.locator(`xpath=//*[@href="${link}"]`);
  }
}
