export const HalfMode=async(page)=>{
    await page.setViewport({ width: 1024, height: 768 });
}