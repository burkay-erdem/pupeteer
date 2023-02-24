import puppeteer from "puppeteer";



export const Clicker=async(page,selector)=>{
    
    await new Promise(r => setTimeout(r, 1000)) 
    await page.waitForSelector(selector,{timeout: 5000});
    await page.click(selector);


}