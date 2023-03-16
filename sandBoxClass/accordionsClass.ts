import { expect, Page } from "@playwright/test";

export class Accordions {
    constructor(public page: Page) { }

    async accordionFunc() {
        await this.page.locator("summary").click();
        const value = await this.page.locator("//p[text()='This is an accordion item.']");
        expect(value).toBeVisible();
        expect(value).toContainText("This is an accordion item.");
    }
}