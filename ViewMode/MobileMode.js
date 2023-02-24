export const MobileMode=async(page)=>{
    await page.goto("https://elonky.com/");
    await page.setViewport({ width: 390, height: 844 });
}