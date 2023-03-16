import { expect, Page } from "@playwright/test";

export class windowOperations{
    constructor(public page:Page){}
    async newTab(){
        const [newWindow] = await Promise.all([
                   this. page.waitForEvent("popup"),
                   this. page.click("//b[text()='New Tab']")
            
                 ])
                 console.log(newWindow.url())
    }
    async replaceTab(){
        const [newWindow] = await Promise.all([
                   this. page.waitForEvent("popup"),
                   this. page.click("//b[text()='Replace Window']")
            
                 ])
                 console.log(newWindow.url())
    }
    async newWindow(){
        const [pageTwo] = await Promise.all([
                this.page.waitForEvent('popup'),  
                await this. page.locator('button[onclick="newWindow()"] b').click()    
              ])
              expect(pageTwo.url()).toContain('google')
            await pageTwo.locator('input[title="Search"]').type('playwright.dev')
    }

}