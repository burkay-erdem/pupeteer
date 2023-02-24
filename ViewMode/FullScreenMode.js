export const FullScreenMode=async(page)=>{
    await page.setViewport({ width: 1920, height: 1080 });
}