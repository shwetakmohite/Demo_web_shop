import {test, expect} from '@playwright/test';
import { loginPage } from '../Pages/loginPage'

test ('Demo web shop Login', async({page})=> {

const LoginPage = new loginPage(page);

await LoginPage.openLoginPage();
// await page.pause(); // debug breakpoint
//console.log("this is opening the login page");

await page.screenshot({
    path:"test-results/login-page.png",
    fullPage:true
})


await LoginPage.enterLoginDetails('guest2@gmail.com','Test@124npx3');
await page.screenshot({
    path:"test-results/after-login-page.png",
    fullPage:true
})
await expect(LoginPage.logoutBtn).toBeVisible();

});

//npx playwright test -g  "Demo web shop Login"  --headed