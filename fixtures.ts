import { test as base} from "@playwright/test";
import { StoreHomePage } from "./patterns/pages/homePage";
import { RegistrationPage } from "./patterns/pages/registrationPage";


interface Pages {
    storeHomePage: StoreHomePage;
    registrationPage: RegistrationPage;
}

export const test = base.extend<Pages>({
    
    storeHomePage: async ({ page }, use) => {
        await use(new StoreHomePage(page));
    },

    registrationPage: async({page}, use) => {
        await use(new RegistrationPage(page));
    }
    
});
