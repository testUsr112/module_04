import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import { assert, expect } from 'chai';

describe('Feature: Product details page', function () {
    let homePage;
    let productPage;
    beforeEach(async () => {
        homePage = new HomePage();
        productPage = new ProductPage();
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
