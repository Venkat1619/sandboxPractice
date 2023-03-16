import { expect, Page } from "@playwright/test";

export class uploadClass{
    constructor(public page:Page){}
    async uploadFunc(){
        await this.page.setInputFiles("#file_upload","./tests/sample.txt");
        await this.page.locator("//input[@type='submit']").click();
        expect(await this.page.locator("//div[text()='File upload complete']")).toContainText("File upload complete")
        await this.page.waitForTimeout(3000)
    }
}