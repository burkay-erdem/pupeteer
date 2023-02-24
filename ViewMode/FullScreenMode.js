export const FullScreenMode=async(page)=>{
    await page.goto("https://elonky.com/");
    await page.setViewport({ width: 1920, height: 1080 });
}