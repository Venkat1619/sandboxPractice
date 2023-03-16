export { }
import { test, expect } from '@playwright/test'
import { frameClass } from '../sandBoxClass/frameClass'
test.describe("iFrame Testing",async()=>{
    
test("iframe login ", async ({ page,baseURL }) => {
    const frameEx= new frameClass(page);
    await page.goto(`${baseURL}iframes/`)
    await expect (page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/iframes/");
    await frameEx.frameLogin();
});

test("Frame Operation",async({page,baseURL})=>{
    const frameEx = new frameClass(page);
    await page.goto(`${baseURL}iframes/`);
    await frameEx.frameOperation();
    await expect(page).toHaveTitle("Iframes | automateNow");
})

})

