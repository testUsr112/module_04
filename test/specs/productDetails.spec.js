import { homePage, productPage } from '../pages/index.js';
import { assert, expect } from 'chai';

describe('Feature: Product details page', function () {
    beforeEach(async () => {
        await homePage.open();
    });

    it('Scenario: View product details', async function () {
        await homePage.selectFirstProduct();
        const pageUrl = await browser.getUrl();
        assert.include(pageUrl, '/product', 'User should be on Product page');
        expect(await productPage.productName.isDisplayed()).to.be.true;
        expect(await productPage.productImage).to.exist;
        expect(await productPage.productPrice.isDisplayed()).to.be.true;
        expect(await productPage.productDescription.isDisplayed()).to.be.true;
    });
});
