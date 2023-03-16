import { Page } from "@playwright/test";

export class downloadClass {
    constructor(public page: Page) { }

    async downloadFunc() {
        const download = await Promise.all([
            this.page.waitForEvent("download"),
            this.page.click("a.wpdm-download-link.download-on-click"),
        ])
        const fileName = await download[0].suggestedFilename()
        await download[0].saveAs(fileName)
    };

    async secureFileDownload() {
        await this.page.locator("//a[@data-package='921']").click();
        const frame = await this.page.frameLocator("#wpdm-lock-frame")
        await frame.locator("//input[@placeholder='Enter Password']").type("automateNow")
        const download = await Promise.all([
            this.page.waitForEvent("download"),
            await frame.locator("//span[@class='input-group-btn input-group-append']").click()
        ]);
        const fileName = await download[0].suggestedFilename()
        await download[0].saveAs(fileName);
    }
}