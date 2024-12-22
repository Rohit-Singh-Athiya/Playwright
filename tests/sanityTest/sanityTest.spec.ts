import { expect } from "@playwright/test";
import { test } from "../../fixtures";
import { StoreHomePage } from "../../patterns/pages/homePage";

test.describe.parallel("Check Homepage Accessability", async()=> {
  
  test("Check Tabs Visibility", async({page, storeHomePage }) => {
  await storeHomePage.goTo();
  await expect(page).toHaveTitle(/Your Store/);
  await expect(storeHomePage.desktops).toBeVisible();
  await expect(storeHomePage.laptops).toBeVisible();
  await expect(storeHomePage.components).toBeVisible();
  await expect(storeHomePage.tablets).toBeVisible();
  await expect(storeHomePage.software).toBeVisible();
  await expect(storeHomePage.phones).toBeVisible();
  await expect(storeHomePage.cameras).toBeVisible();
  await expect(storeHomePage.mp3Players).toBeVisible();
});

  test("Check Headers Visibility", async ({storeHomePage}) => {
    await storeHomePage.goTo();
    await expect(storeHomePage.currencyDropdown).toBeVisible();
    await storeHomePage.currencyDropdown.click();
    await expect(storeHomePage.euro).toBeVisible();
    await expect(storeHomePage.pounds).toBeVisible();
    await expect(storeHomePage.dollar).toBeVisible();
  });
});
