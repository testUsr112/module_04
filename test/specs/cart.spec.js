import { pages } from '../pages/index.js';
import { assert, expect } from 'chai';
describe('Feature: Adding to Cart', function () {
    beforeEach(async () => {
        await pages('product').openProductPage('01KHS1ZJ5H5NGFN8KT6CA5G8JH');
    });

    it('Scenario: Add product to the cart', async function () {
        await pages('product').setQuantityInput(2);
        await pages('product').clickAddToCartButton();
        expect(await pages('product').getCartItemsQuantity()).to.equal('2');
        await pages('product').clickCartIcon();
        const pageUrl = await browser.getUrl();
        assert.include(pageUrl, '/checkout', 'User should be on Cart page');
        expect(await pages('cart').getProductName()).to.contain('Pliers');
        expect(await pages('cart').getProductQuantity()).to.equal('2');
        expect(await pages('cart').getProductPrice()).to.contain('12.01');
        expect(await pages('cart').getTotalPrice()).to.contain('24.02');
    });
});