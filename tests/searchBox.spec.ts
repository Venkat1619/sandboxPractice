export{}
 import {test,expect} from '@playwright/test'
import { searchClass } from '../sandBoxClass/searchClass';

 test("searchBox ",async({page,baseURL})=>{
  const search = new searchClass(page)
    await page.goto(`${baseURL}search-box/`);
    expect(page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/search-box/");
    await search.searchBar();

    
 })