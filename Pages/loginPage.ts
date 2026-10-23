import {Page, Locator} from '@playwright/test'

export class loginPage {
// Locators and methods
//variables intialization
readonly page : Page;
readonly email : Locator;
readonly password : Locator;
readonly loginBtn : Locator;
readonly logoutBtn : Locator;

constructor(page: Page){

this.page = page;
this.email = page.locator('#Email');
this.password= page.locator('#Password');
this.loginBtn = page.getByRole('button',{name:'Log in'});
this.logoutBtn = page.getByRole('link',{name:'Log out'});
}

async openLoginPage(){
await this.page.goto('https://demowebshop.tricentis.com/login');
}

async enterLoginDetails(email : string, password: string){
await this.email.fill(email);
await this.password.fill(password);
await this.loginBtn.click();
}








}