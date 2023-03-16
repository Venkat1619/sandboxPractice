import { expect, Page } from "@playwright/test";

export class modalClass {
    constructor(public page: Page) { }

    async simpleModal() {
        await this.page.click("#simpleModal");
        expect(await this.page.locator("//p[text()='Hi, I’m a simple modal.']")).toContainText("Hi, I’m a simple modal")
    }
    async largeModal() {
        await this.page.click("#formModal");
        expect(await this.page.locator("//img[@loading='lazy']")).toBeVisible()
        expect(await this.page.locator("//div[text()[normalize-space()='Modal Containing A Form']]")).toContainText('Modal Containing A Form');
        await this.page.fill("//input[contains(@class,'name ')]", "abc");
        await this.page.fill("//input[contains(@class,'email ')]", "abc@gmail.com");
        await this.page.fill("//textarea[contains(@class,'textarea ')]", "hello");
        await this.page.click("//button[text()='Submit']")
    }
}