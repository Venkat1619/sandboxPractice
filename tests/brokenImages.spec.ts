import {expect, test} from '@playwright/test';
import { brokenImage } from '../sandBoxClass/brokenImageClass';

test("broken images",async({page,baseURL})=>{
    const image = new brokenImage(page)
    await page.goto(`${baseURL}broken-images/`);
    expect(await page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/broken-images/");
    await image.verifyBrokenImages()
})