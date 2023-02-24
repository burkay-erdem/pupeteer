export const TabletMode=async(page)=>{
    await page.goto("https://elonky.com/");
    await page.setViewport({ width: 1280, height: 720 });
}