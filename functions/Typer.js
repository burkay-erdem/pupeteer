 export const Typer = async (page,text) => {
    await page.keyboard.type(text, { delay: 100 });
  };