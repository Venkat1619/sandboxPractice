import { Page,expect } from "@playwright/test";

export class alertClass{
    constructor(public page:Page){}

    async alertOperation(){
     await this.page.locator("//b[text()='Alert Popup']").click()
    };
    async confirmPopup(){
        await this.page.locator("#confirm").click();
        expect(this.page.locator("#confirmResult")).toContainText(("OK it is!"))
    }
    async promptPopup(){
        await this. page.locator("#prompt").click();
        expect(await this. page.locator("#promptResult")).toContainText("Nice to meet you, sai!")
    }

    async dismissPopup(){
        await this.page.locator("#confirm").click();
        expect(this.page.locator("#confirmResult")).toContainText(("Cancel  it is!"))
        
    }
    async propmptDismissPopup(){
        await this.page.locator("#prompt").click();
        expect(await this.page.locator("#promptResult")).toContainText("Fine, be that way...")

        
    }

}