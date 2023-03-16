import { expect, Page } from "@playwright/test";

export class searchClass {
    constructor(public page: Page) { }

    async searchBar() {
        await this.page.fill("#wp-block-search__input-1", "JMeter");
        await this.page.click("button.wp-block-search__button.wp-element-button");
        expect(await this.page).toHaveURL("https://automatenow.io/?s=JMeter");

        const textContent = (await this.page.locator(".breadcrumb_last"));
        expect(textContent).toHaveText("You searched for JMeter")


    }

}