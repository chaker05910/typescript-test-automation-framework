import { test as base } from '@playwright/test';
import { ICredentials } from './types';

export const test = base.extend<{
  credentials: ICredentials;
}>({
  credentials: async ({}, use) => {
    await use({
      password: 'pwd'
    });
  }
});
