import { expect, Page } from "@playwright/test";

export class calendar {
    constructor(public page: Page) { }

    async inputDate() {
        await this.page.locator("//input[contains(@class,'date jp-contact-form-date')]").click();
        await this.page.locator("//a[text()='3']").click()
        await this.page.locator("(//button[@type='submit'])[1]").click()
    }

    async prevORnextDates() {
        await this.page.locator("//input[contains(@class,'date jp-contact-form-date')]").click()
        const mmyy = await this.page.locator("ui-datepicker-title");
        const prev = await this.page.locator("//a[@data-handler='prev']");
        const next = await this.page.locator("//a[@data-handler='next']");
        //select prev month
        await prev.click();
        await this.page.locator("//a[text()='1']").click();
        //select next month
        // await next.click();
        // await page.locator("//a[text()='1']").click();
        await this.page.locator("//a[@data-date='10']").click();
        await this.page.click("(//button[@class='pushbutton-wide'])[1]");
        expect(await this.page.locator("//div[@class='field-value']")).toContainText("February 10, 2023")
    }

    async selectParticularDate() {
        const month: string = "April"
        const year: string = "2024"

        await this.page.locator("//input[contains(@class,'date jp-contact-form-date')]").click()
        while (true) {
            const textmonth = await this.page.locator("//span[@class='ui-datepicker-month']").textContent();
            const texyear = await this.page.locator("//span[@class='ui-datepicker-year']").textContent()
            const mmyy = (month === textmonth && year === texyear)
            if (mmyy) {
                break;

            }
            else {
                // next symblo x-path
                await this.page.locator("//a[@title='Next']").click()

            }
        }
        // day x-path
        await this.page.locator("//table[@class='ui-datepicker-calendar']/tbody[1]/tr[2]/td[3]/a[1]").click()
        await this.page.click("(//button[@class='pushbutton-wide'])[1]");
        expect(await this.page.locator("//div[@class='field-value']")).toContainText("April 10, 2024")
    }
}