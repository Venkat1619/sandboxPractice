import {expect,test} from "@playwright/test";
import { uploadClass } from "../sandBoxClass/uploadClass";

test("upload files",async({page,baseURL})=>{
    const upload = new uploadClass(page)
    await page.goto(`${baseURL}file-upload/`);
    await upload.uploadFunc();

   
})