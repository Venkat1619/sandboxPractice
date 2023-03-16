export { }
import { test, expect } from '@playwright/test';

test("Boken Links", async ({ page }) => {
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/broken-links/");
    expect(page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/broken-links/");
    await page.click("//a[contains(text(),'Click me')]");
    //after clicking the broken url
    expect(page).toHaveURL("chrome-error://chromewebdata/");
    expect(page.locator("//span[text()='This site can’t be reached']")).toContainText("This site can’t be reached")


})