import {test,expect} from '@playwright/test';
import {homePage} from '../Pages/homePage';
import {loginPage} from '../Pages/loginPage';
import {data} from '../test-data/data';
import testData from '../test-data/testData.json';
import {getExcelData} from '../utilis/excelReader';
//npx playwright  test -g "Add Blue Jeans toto cart with Quantity" --headed --project=chromium

test('Add Blue Jeans toto cart with Quantity', async({page})=>{

const LoginPage = new loginPage(page);
const HomePage = new homePage(page);

await LoginPage.openLoginPage();
//await LoginPage.enterLoginDetails(data.login.email,data.login.password);  // guest2@gmail.com','Test@123'
//await LoginPage.enterLoginDetails(testData.login[0].email,testData.login[0].password); //json
await expect(LoginPage.logoutBtn).toBeVisible();
await HomePage.clickApparel();
await HomePage.clickBlueJeans();
await HomePage.addQty(data.homepage.quantity);

});
