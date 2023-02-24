export const Login = async (page,Clicker,Typer) => {
    await Clicker(page,".profile");
    await Clicker(page,".auth-button:nth-child(1)");
    await Clicker(page,
      "body > app-root > app-modal > div > div > div > div > app-login > div > div > form > label:nth-child(1) > input"
    );
    await Typer(page,"ugurtest6@kayra.com");
    await page.keyboard.press("Tab");
    await Typer(page,"Ugur.123");
    await page.keyboard.press("Enter");
  };