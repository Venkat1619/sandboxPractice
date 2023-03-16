export{}

import {test,expect} from "@playwright/test";
import {  carousel } from "../sandBoxClass/carouselClass";

test("carousel testing ",async({page,baseURL})=>{
    const Carousel = new carousel(page);
    await page.goto(`${baseURL}carousel/`);
    expect(await page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/carousel/")
      await Carousel.carouselFunc()
});