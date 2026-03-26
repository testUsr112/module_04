import { pages } from '../pages/index.js';
import { expect } from 'chai';
describe('Feature: Favourites', function () {
    beforeEach(async () => {
        await pages('login').open();
        await pages('login').enterEmail('test@test.com');
        await pages('login').enterPassword('123Aa45@');
        await pages('login').clickLoginButton();
    });
    it('Scenario: Add product to Favourites', async function () {
        await pages('product').openProductPage('01KH0T2K8ERCFZ32V3V2Z4D6M6');
        await pages('product').clickAddToFavoritesButton();
        expect(await pages('product').getToastMsg()).to.contain('Product added to your favorites list.');
        await pages('product').clickAccountDropdown();
        await pages('product').clickMyFavorites();
        let url = await browser.getUrl();
        assert.include(url, '/account/favorites', 'User should be on Favorites page');
    });
});
