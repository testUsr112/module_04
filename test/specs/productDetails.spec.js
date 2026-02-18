import { pages } from '../pages/index.js';
import { assert, expect } from 'chai';

describe('Feature: Product details page', function () {
    beforeEach(async () => {
        await pages('home').open();
    });

    it('Scenario: View product details', async function () {
        await pages('home').selectFirstProduct();
        const pageUrl = await browser.getUrl();
        assert.include(pageUrl, '/product', 'User should be on Product page');
        expect(await pages('product').productName.isDisplayed()).to.be.true;
        expect(await pages('product').productImage).to.exist;
        expect(await pages('product').productPrice.isDisplayed()).to.be.true;
        expect(await pages('product').productDescription.isDisplayed()).to.be.true;
    });
});
