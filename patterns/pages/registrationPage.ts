import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { paths } from "../../data/urls/urls";


export class RegistrationPage extends BasePage {

    constructor(page: Page){
        super(page, paths.register);
    }

get firstName() {
    return this.currentPage.getByPlaceholder('First Name');
}

get lastName() {
    return this.currentPage.getByPlaceholder('Last Name');
}

get email() {
    return this.currentPage.getByPlaceholder('E-Mail');
}

get telephone() {
    return this.currentPage.getByPlaceholder('Telephone');
}

get password() {
    return this.currentPage.locator('[id="input-password"]');
}

get confirmPassword() {
    return this.currentPage.getByPlaceholder('Password Confirm');
}

get accountRegisterBlock(){
    return this.currentPage.locator('[id="account-register"]');
}

get newsLetter() {
    return this.currentPage.getByRole('radio');
}

async selectNewsLetter(option: string) {
 if(option in ['Yes','yes'] ){
    return this.newsLetter.locator('[value="1"]').click;
 }
 else{
    return this.newsLetter.locator('[value="0"]').click;
 }
}

 get privacyCheckBox(){
    return this.currentPage.getByRole('checkbox');
 }

 get continueButton(){
    return this.currentPage.locator('[value="Continue"]');
 }

 get successBlock() {
    return this.currentPage.locator('[id="content"]');
 }




}