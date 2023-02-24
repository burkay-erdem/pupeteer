export const AddAddress = async (page,Clicker,Typer) => {
    
    await Clicker(page,".profile");
    await Clicker(page,
      "app-user-actions > div > app-profile-action > div > div > app-dropdown > div > div > div > a:nth-child(5)"
    );
    await Clicker(page,
      "body > app-root > app-shop > app-account > div > div > div.col-span-12.content > app-user > app-address > div > div > div > button"
    );
    await Clicker(page,"#name");
    await Typer(page,"Home");
    await page.keyboard.press("Tab");
    await Typer(page,"Ugur");
    await page.keyboard.press("Tab");
    await Typer(page,"De");
    await page.keyboard.press("Tab");
    await Typer(page,"ugurtest6@kayra.com");
    await page.keyboard.press("Tab");
    await Typer(page,"5071432043");
    await page.keyboard.press("Tab");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Tab");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Tab");
    await Typer(page,"Sivas");
    await page.keyboard.press("Tab");
    await Typer(page,"215123123213");
    await page.keyboard.press("Tab");
    await Typer(page,"Lorem sadas lorem address");
    await Clicker(page,
      "body > app-root > app-modal > div > div > div > div > app-addressadd > div > div > div.body > form > div.input-item.col-span-2.items-center.animate-none.mt-5.mb-10 > button"
    );
  };