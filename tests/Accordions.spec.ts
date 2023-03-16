export { }

import { test, expect } from '@playwright/test'
import { Accordions } from '../sandBoxClass/accordionsClass';
test("Accordions", async ({ page, baseURL }) => {
  const accordion = new Accordions(page)
  await page.goto(`${baseURL}accordions/`);
  expect(await page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/accordions/");
  await accordion.accordionFunc();
})