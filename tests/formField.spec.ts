export{}
import {test,expect} from "@playwright/test"
import { formField } from "../sandBoxClass/formFieldClass";

test("formField testing",async({page,baseURL})=>{
     const form = new formField(page);
    await page.goto(`${baseURL}form-fields/`);
    expect(page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/form-fields/");
    await form.formField("venkat","abc@gmail.com","Hello World!"); 
    expect(await page).toHaveTitle("Form Fields | automateNow");
    await form.submit();
    expect(await page.locator("//h4[text()='Your message has been sent']")).toContainText("Your message has been sent")

})