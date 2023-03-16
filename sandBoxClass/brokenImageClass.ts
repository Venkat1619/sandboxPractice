import { Page } from "@playwright/test";

export class brokenImage {
    constructor(public page: Page) { }

    async verifyBrokenImages() {

        const images = await this.page.$$('img');

        for (const image of images) {
            const isBroken = await image.evaluate((img) => {
                return img.naturalWidth === 0 || img.naturalHeight === 0;
            });
            if (isBroken) {
                console.log(`Image ${await image.getAttribute('src')} is broken`);
            }
            else {
                console.log(`Image ${await image.getAttribute('src')} is not broken`);

            }
        }

    }
}