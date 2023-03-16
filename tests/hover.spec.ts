import {test,expect} from "@playwright/test"

export{}
test("image Hover testing",async({page,baseURL})=>{
    await page.goto(`${baseURL}hover/`)
    expect(await page).toHaveTitle("Hover | automateNow");

   
});