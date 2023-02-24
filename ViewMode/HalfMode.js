export const HalfMode=async(page)=>{
    await page.goto("https://elonky.com/");
    await page.setViewport({ width: 1024, height: 768 });
}