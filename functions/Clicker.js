import puppeteer from "puppeteer";



export const Clicker=async(page,selector)=>{
    
    await new Promise(r => setTimeout(r, 2000)) 
    await page.waitForSelector(selector);
    await page.click(selector);


}