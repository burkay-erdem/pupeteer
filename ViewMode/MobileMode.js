export const MobileMode=async(page)=>{
    await page.setViewport({ width: 390, height: 844 });
}