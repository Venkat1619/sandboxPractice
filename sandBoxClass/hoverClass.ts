import { expect, Page } from "@playwright/test";

export class hoverClass{
    constructor(public page:Page){}

    async hoverFunc(){
        await this.page.hover("#mouse_over");
        expect(await this.page.locator("#mouse_over")).toContainText("You did it!")
    

    }
}