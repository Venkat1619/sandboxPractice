import { expect, test } from "@playwright/test";
import { clickEvent } from "../sandBoxClass/clickEvents";

test("click events", async ({ page ,baseURL}) => {
    const clickEx = new clickEvent(page)
    await page.goto(`${baseURL}click-events/`);
    expect(page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/click-events/");
    await clickEx.clickFunc()
    
})