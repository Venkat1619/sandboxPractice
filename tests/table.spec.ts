import { tableClass } from "../sandBoxClass/tableClass";

 export{}
 const {test,expect} = require("@playwright/test");

 test("table testing",async({page,baseURL})=>{
    const table = new tableClass(page)
    await page.goto(`${baseURL}tables/`);
    expect(await page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/tables/");
    expect(await page).toHaveTitle("Tables | automateNow")
    await table.tableHeadFunc();
    await table.dropDownFunc();
    await table.searchFunc();
    expect(await page.locator("//td[@class='column-2']")).toContainText('China');
    
 })
 