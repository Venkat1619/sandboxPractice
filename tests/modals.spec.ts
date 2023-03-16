import { test, expect } from "@playwright/test";
import { modalClass } from "../sandBoxClass/modalClass";

test.describe("Modals testing", async () => {
    test("sample modals ", async ({ page, baseURL }) => {
        const modal = new modalClass(page)
        await page.goto(`${baseURL}modals/`)
        expect(await page).toHaveTitle("Modals | automateNow")
        await modal.simpleModal()
    })

    test(" large modal", async ({ page,baseURL }) => {
        const modal = new modalClass(page)
        await page.goto(`${baseURL}modals/`);
        await modal.largeModal();
    })
})