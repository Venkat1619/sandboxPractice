import { Page } from "@playwright/test";

export class dragandDrop{
    constructor(public page:Page){}
   
    async dragNdropWithDragTo(){
    await this.page.locator("//img[@draggable='true']").dragTo(this.page.locator("//div[@id='div2']"))
    }

    async dragMethod(){
        const src = await this. page.locator("#moveMe");
            const dest = await this.page.locator("(//div[@class='wp-block-spacer'])[1]")
            if (src && dest) {
                const srcBound = await src.boundingBox();
                const destBound = await dest.boundingBox();
                if (srcBound && destBound) {
                    await this. page.mouse.move(srcBound.x + 50, srcBound.y + 50);
                    await this. page.mouse.down()
                    await this.page.mouse.move(destBound.x, destBound.y);
                    await this.page.mouse.down()
                } else {
                    throw new Error("no element found")
                }
            }
        
    }
}