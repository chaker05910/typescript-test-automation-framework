import { Page, Locator, FrameLocator } from '@playwright/test';

export class ByFrame {
  private frame: FrameLocator;

  constructor(page: Page, frameSelector: string) {
    this.frame = page.frameLocator(frameSelector);
  }

  public xpath(selector: string): Locator {
    return this.frame.locator(`xpath=${selector}`);
  }

  public css(selector: string): Locator {
    return this.frame.locator(selector);
  }

  public id(id: string): Locator {
    return this.frame.locator(`xpath=//*[@id="${id}"]`);
  }

  public class(className: string): Locator {
    return this.frame.locator(`xpath=//*[@class="${className}"]`);
  }

  public name(name: string): Locator {
    return this.frame.locator(`xpath=//*[@name="${name}"]`);
  }

  public text(text: string): Locator {
    return this.frame.locator(`xpath=//*[text()="${text}"]`);
  }

  public link(link: string): Locator {
    return this.frame.locator(`xpath=//*[@href="${link}"]`);
  }
}
