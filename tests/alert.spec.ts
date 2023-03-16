import { expect ,test} from "@playwright/test";
import { alertClass } from "../sandBoxClass/alertClass";

test.describe("popUp tetsing", async () => {

    test("alert ", async ({ page,baseURL }) => {
        const alertEx= new alertClass(page)
        await page.goto(`${baseURL}popups`);
        expect(await page).toHaveTitle("Popups | automateNow")

        page.on("dialog", async (alert) => {
            await alert.accept();
        });
        await  alertEx.alertOperation()
    });

    //confirm popup it contains both accept and dismiss

    test("accept alert", async ({ page,baseURL }) => {
        const confirmpopup= new alertClass(page)
        await page.goto(`${baseURL}popups`);
        page.on("dialog", async (alert) => {
            await alert.accept();
        });
        await confirmpopup.confirmPopup();
        
    });

    //propmt popup we need enter text in the popup

    test("Prompt Popup for accept", async ({ page,baseURL }) => {
        const promptpopup = new alertClass(page);
        await page.goto(`${baseURL}popups`);
        page.on("dialog", async (alert) => {
            await alert.accept("sai")
        });
        await promptpopup.promptPopup();
    })

});

test.describe("popup negative testing", async () => {

    test(" dismiss alert", async ({ page,baseURL }) => {
        const Dismisspopup = new alertClass(page);
        await page.goto(`${baseURL}popups`);
        page.on("dialog", async (alert) => {
            await alert.dismiss();
        });
       await   Dismisspopup.dismissPopup()
       
    });

    //propmt popup we need to dismiss the popup
    test("Prompt Popup for dismiss", async ({ page,baseURL }) => {
        const promptDismisspopup = new alertClass(page);
        await page.goto(`${baseURL}popups`);
        page.on("dialog", async (alert) => {
            await alert.dismiss()
        })
        promptDismisspopup.propmptDismissPopup()
    })
});