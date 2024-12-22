import { Page } from "playwright/test";
import { BasePage } from "./basePage";
import { paths } from "../../data/urls/urls";

export class StoreHomePage extends BasePage {
 
    constructor(page: Page){
    super(page, paths.homepage);
 }

get title() {
    return this.currentPage.getByTitle('Your Store');
}   

get myAccount() {
    return this.currentPage.getByRole('link', { name: ' My Account' });
}  

get register() {
    return this.currentPage.getByRole('link', { name: 'Register' });
}  

get loginButton() {
    return this.currentPage.getByRole('link', {name: 'Login' });
}   

get desktops() {
    return this.currentPage.getByRole('link', {name:'Desktops'});
}  

get laptops() {
    return this.currentPage.getByRole('link', { name: 'Laptops & Notebooks', exact: true })
}  

get components() {
    return this.currentPage.getByRole('link', { name: 'Components', exact: true })
}  

get tablets() {
    return this.currentPage.getByRole('link', { name: 'Tablets' })
}  

get software() {
    return this.currentPage.getByRole('link', { name: 'Software' })
}  

get phones() {
    return this.currentPage.getByRole('link', { name: 'Phones & PDAs' })
}  

get cameras() {
    return this.currentPage.getByRole('link', { name: 'Cameras' })
}

get mp3Players() {
    return this.currentPage.getByRole('link', { name: 'MP3 Players', exact: true })
} 

get cart() {
    return this.currentPage.locator('cart-total');
} 

get currencyDropdown() {
    return this.currentPage.getByRole('button', {name: 'Currency'});
} 

get euro() {
    return this.currentPage.getByRole('button', {name: 'EUR'});
}

get pounds() {
    return this.currentPage.getByRole('button', {name: 'Pound Sterling'});
}

get dollar() {
    return this.currentPage.getByRole('button', {name: 'US Dollar'});
}

}