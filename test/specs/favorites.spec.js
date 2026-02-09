import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';
import { expect } from 'chai';
describe('Feature: Favourites', function () {
    let loginPage;
    let productPage;
    beforeEach(async () => {
        loginPage = new LoginPage();
        await loginPage.open();
        await loginPage.enterEmail('test@test.com');
        await loginPage.enterPassword('123Aa45@');
        await loginPage.clickLoginButton();
        productPage = new ProductPage();
        await productPage.openProductPage('01KH0T2K8ERCFZ32V3V2Z4D6M6');
    });
    it('Scenario: Add product to Favourites', async function () {
        await productPage.clickAddToFavoritesButton();
        expect(await productPage.getToastMsg()).to.contain('Product added to your favorites list.');
        await productPage.clickAccountDropdown();
        await productPage.clickMyFavorites();
    });
});
