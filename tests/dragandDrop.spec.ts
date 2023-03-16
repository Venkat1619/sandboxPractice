import { test, expect } from "@playwright/test"
import { dragandDrop } from "../sandBoxClass/drag&Drop";

//sandbox website
test("drag the mouse", async ({ page,baseURL }) => {
    const drag = new dragandDrop(page)
    await page.goto(`${baseURL}gestures`);
    await expect(page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/gestures/");
    await drag.dragMethod();
});

test("drage",async({page,baseURL})=>{
    const dragto = new dragandDrop(page)
    await page.goto(`${baseURL}gestures`);
    await dragto.dragNdropWithDragTo();
})

//dhtml website
test("drag & Drop new method", async ({ page }) => {
    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
    await page.locator("#box6").dragTo(page.locator("//div[text()='Italy']"));
});

test("drag & Drop  II method", async ({ page }) => {
    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
    const src = await page.locator("#box3")
    const dest = await page.locator("//div[@id='box103']")
    if (src) {
        const srcBound = await src.boundingBox();
        const destBound = await dest.boundingBox();
        if (srcBound && destBound) {
            await page.mouse.move(srcBound.x + srcBound.width / 2, srcBound.y + srcBound.height / 2);
            await page.mouse.down()
            await page.mouse.move(destBound.x, destBound.y);
            await page.mouse.down()
        } else {
            throw new Error("no element found")
        }
    }
})