import { loginPage, productPage } from '../pages/index.js';
import { expect } from 'chai';
describe('Feature: Favourites', function () {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.enterEmail('test@test.com');
        await loginPage.enterPassword('123Aa45@');
        await loginPage.clickLoginButton();
    });
    it('Scenario: Add product to Favourites', async function () {
        productPage = new ProductPage();
        await productPage.openProductPage('01KH0T2K8ERCFZ32V3V2Z4D6M6');
        await productPage.clickAddToFavoritesButton();
        expect(await productPage.getToastMsg()).to.contain('Product added to your favorites list.');
        await productPage.clickAccountDropdown();
        await productPage.clickMyFavorites();
        let url = await browser.getUrl();
        assert.include(url, '/account/favorites', 'User should be on Favorites page');
    });
});
