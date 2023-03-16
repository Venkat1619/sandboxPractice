import { expect, Page } from "@playwright/test";

export class formField {
    constructor(public page: Page) { }

    async formField(name, email, msg) {
        await this.enterName(name);
        await this.checkBox();
        await this.radioButton();
        await this.dropDown();
        await this.enterEmail(email);
        await this.enterMessage(msg);
    }

    async enterName(name: string) {
        await this.page.locator("(//input[contains(@class,'name ')])[1]").fill(name);
    }

    async checkBox() {
        const checkBox = await this.page.locator("//input[@value='Water']")
        expect(checkBox).not.toBeChecked();
        await checkBox.click();
        expect(checkBox).toBeChecked();

    }
    async radioButton() {
        const checkRadio = await this.page.locator("input[value='Red']");
        expect(checkRadio).not.toBeChecked();
        await checkRadio.click();
        expect(checkRadio).toBeChecked();

    }
    async dropDown() {
        await this.page.locator("//span[@role='combobox']").click();
        await this.page.locator("#ui-id-2").click();

    }
    async enterEmail(email: string) {
        await this.page.locator("#email").type(email);

    }
    async enterMessage(msg: string) {
        await this.page.locator("#contact-form-comment-message").type(msg);

    }
    async submit() {
        await this.page.locator("(//button[@type='submit'])[1]").click();

    }
}