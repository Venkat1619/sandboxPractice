import { expect, Page } from "@playwright/test";

export class carousel {
    constructor(public page: Page) { }

    async carouselFunc() {
        await this.page.locator("//button[@aria-label='Previous']").click();
        await this.page.locator("//button[@aria-label='Previous']").click();
        expect(await this.page).toHaveTitle("Carousel | automateNow")
    }
}