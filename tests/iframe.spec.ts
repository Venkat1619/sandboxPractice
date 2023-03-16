export{}
import {test,expect} from '@playwright/test'

test("iframe testing ",async({page})=>{
    await page.goto("https://letcode.in/frame");
   const  allFrame  = await page.frames()
   console.log(allFrame.length)
  const frame=page.frame({name:"frame1"});

  if(frame!= null){
await frame.fill("//input[@placeholder='Enter name']","venkat");
await frame.fill("//label[text()='Last Name']/following::input","sai");
const frames=   frame.childFrames();
console.log(frames.length)
if(frames!= null){
  await frames[1].fill("//label[text()='Email']/following::input", "abc@gmail.com")
}else{
}
  }
  await page.waitForTimeout(3000)
})