import {test,expect} from '@playwright/test';
import {homePage} from '../Pages/homePage';
import {loginPage} from '../Pages/loginPage';
// oct 12 , 2026   npx playwright test .\tests.hook.spec.ts --headed --project=chromium
let HomePage : homePage;
let LoginPage : loginPage;


// Run once before all tests

test.beforeAll(async () => {

    console.log('started the demo we site test');
});

// Runs before every test
test.beforeEach(async ({page})=>{
 LoginPage = new loginPage(page);
 HomePage = new homePage(page);
await LoginPage.openLoginPage();
console.log("website opened succesfully");


});

// run after each test 
test.afterEach(async({},testInfo)=>{
console.log(`Test:${testInfo.title}"`);
console.log(`Status:${testInfo.status}"`);


});

test('Verify Home page title',async({page})=>{
await expect(page).toHaveTitle(/Demo Web Shop/);

});

test('Verify  Book Catagory',async({page})=>{
    await HomePage.clickBooks();
     await expect(page).toHaveURL(/books/i);

});

test('Verify  computer Catagory',async({page})=>{
    await HomePage.clickComputers();
     await expect(page).toHaveURL(/computers/i);

});
