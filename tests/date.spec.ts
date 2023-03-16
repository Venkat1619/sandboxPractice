export { }
import { test, expect } from "@playwright/test"
import { calendar } from "../sandBoxClass/calendarClass";

test.describe("calendar tetsing",async()=>{
    test("dates testing for current year and month", async ({ page,baseURL}) => {
       const dateEx = new calendar(page)
        await page.goto(`${baseURL}calendars/`)
        await expect(page).toHaveURL(("https://automatenow.io/sandbox-automation-testing-practice-website/calendars/"));
        await  dateEx.inputDate();
    });
    
    test("dates for prev or next month", async ({ page ,baseURL}) => {
       const dateEx = new calendar(page)
        await page.goto(`${baseURL}calendars/`);
       await expect(page) .toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/calendars/");
       await dateEx.prevORnextDates();
    })
    
    test("dates for prev or next month with loop", async ({ page ,baseURL}) => {
       const dateEx = new calendar(page);
       await page.goto(`${baseURL}calendars/`)
       await expect(page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/calendars/");
        await dateEx.selectParticularDate()
    })
})
