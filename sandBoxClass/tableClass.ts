import { expect, Page } from "@playwright/test";

export class tableClass {
    constructor(public page: Page) { }
    async tableHeadFunc() {
        const table = await this.page.locator("#tablepress-1")        
        const headers = await table.locator("thead");
        await headers.locator("th.column-1.sorting").click();
        await headers.locator("th.column-2.sorting").click();
        await headers.locator("th.column-3.sorting").click();

    }
    async dropDownFunc() {
        await this.page.locator("#tablepress-1_wrapper");
        await this.page.selectOption("//select[@name='tablepress-1_length']", {
            index: 1
        });
        await this.page.waitForTimeout(3000);
    }
    async searchFunc() {
        const wholeTable = await this.page.locator("#tablepress-1_wrapper");
        const search = await wholeTable.locator("div#tablepress-1_filter>label>input")
        await search.type("China");
        await this.page.waitForTimeout(3000);

    }
}