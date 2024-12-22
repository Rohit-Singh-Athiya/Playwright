import { expect } from "@playwright/test";
import { test } from "../../fixtures";
import { regData } from "../../data/userData/registrationData";
import { generateEmail } from "../../helperMethods/helper";

let email: string;

test.beforeEach(async () => {
    email =  await generateEmail();
});

test.describe.parallel('Check User Registration', async() => {
    test('Create New User', async({page, registrationPage, storeHomePage}) => {
        await storeHomePage.goTo();
        await storeHomePage.myAccount.click();
        await storeHomePage.register.click();
        await expect(registrationPage.accountRegisterBlock).toBeVisible();
        await registrationPage.firstName.fill(regData.firstName);
        await registrationPage.lastName.fill(regData.lastName);
        await registrationPage.email.fill(email);
        await registrationPage.telephone.fill(regData.telephone);
        await registrationPage.password.fill(regData.password);
        await registrationPage.confirmPassword.fill(regData.password);
        await registrationPage.selectNewsLetter(regData.newsLetterYes);
        await registrationPage.privacyCheckBox.click();
        await registrationPage.continueButton.click();
        await expect(registrationPage.successBlock).toHaveText(/Your Account Has Been Created!/);
    });
});