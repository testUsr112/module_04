import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import { assert, expect } from 'chai';
describe('Feature: Adding to Cart', function () {
    let productPage;
    let cartPage;
    beforeEach(async () => {
        productPage = new ProductPage();
        cartPage = new CartPage();
        await productPage.openProductPage('01KH0K6SYZGTHZNDWXBSME470P');
    });
    it('Scenario: Add product to the cart', async function () {
        await productPage.setQuantityInput(2);
        await productPage.clickAddToCartButton();
        expect(await productPage.getCartItemsQuantity()).to.equal('2');
        await productPage.clickCartIcon();
        const pageUrl = await browser.getUrl();
        assert.include(pageUrl, '/checkout', 'User should be on Cart page');
        expect(await cartPage.getProductName()).to.contain('Pliers');
        expect(await cartPage.getProductQuantity()).to.equal('2');
        expect(await cartPage.getProductPrice()).to.contain('12.01');
        expect(await cartPage.getTotalPrice()).to.contain('24.02');
    });
});