export const TabletMode=async(page)=>{
    await page.setViewport({ width: 1280, height: 720 });
}