import {Page, Locator} from '@playwright/test';


export class homePage{

readonly page : Page;
readonly apparelShoes: Locator;
readonly blueJeansLink: Locator;
//readonly inputQty: Locator;
readonly btnAddToCart: Locator;
readonly computersLink: Locator;
readonly searchBox: Locator;
readonly bookLink : Locator;

constructor(page: Page){
this.page = page;
this.apparelShoes = page.getByRole('link',{name: 'Apparel & Shoes'}).first();
this.blueJeansLink = page.getByRole('link',{name:'Blue Jeans', exact: true});
//this.inputQty = page.locator('#addtocart_36_EnteredQuantity');
this.btnAddToCart= page.locator('#add-to-cart-button-36');
this .computersLink = page.getByRole('link',{name:'Computers'}).first();
this.searchBox = page.locator('#small-searchterms');
this.bookLink = page.getByRole('link',{name:'Books'}).first();
this.searchBox = page.locator('small-searchterms');
        

}

async clickApparel(){
await this.apparelShoes.click();
}

async clickBlueJeans(){
await this.blueJeansLink.click();
}
async addQty(itemQty: number){
await this.inputQty.fill(itemQty.toString());
await this.btnAddToCart.click();

}

async clickBooks(){
    await this.bookLink.click();


}
async clickComputers(){
    await this.computersLink.click();


}
}