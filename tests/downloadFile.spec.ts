import test, { expect } from "@playwright/test"
import { downloadClass } from "../sandBoxClass/downloadClass"

export { }

test("Download file", async ({ page, baseURL }) => {
    const fileDownload = new downloadClass(page)
    await page.goto(`${baseURL}file-download/`)
    await expect(page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/file-download/");
    await fileDownload.downloadFunc();
})

//  secure file downlaod need password to download
test(" secure file Download ", async ({ page, baseURL }) => {
    const SecureFileDownload = new downloadClass(page)
    await page.goto(`${baseURL}file-download`)
    await expect(page).toHaveTitle("File Download | automateNow");
    await SecureFileDownload.secureFileDownload()
})