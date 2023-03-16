import { Page,expect } from "@playwright/test";

export class clickEvent{
constructor(public page:Page){}
 async clickFunc(){
    await this.page.locator("//button/b[text()='Cat']").click();
    expect(await this.page.locator("#demo")).toContainText("Meow!");
   
    await this.page.locator("//button/b[text()='Dog']").click();
    expect(await this.page.locator("#demo")).toContainText("Woof!");

    await this.page.locator("//button/b[text()='Pig']").click();
    expect(await this.page.locator("#demo")).toContainText("Oink!");

 }
}