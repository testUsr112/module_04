import HomePage from '../pages/HomePage';
import { expect } from 'chai';

describe('Feature: Price Range filter', function () {
    let homePage;
    beforeEach(async () => {
        homePage = new HomePage();
        await homePage.open();
    });

    it('Scenario: Sort by price range', async function () {
        await homePage.filters.setMinPrice(49);
        let prices = await homePage.getProductPrices();
        for (let p of prices) {
            let price = parseFloat(p);
            expect(price).to.be.above(50);
            expect(price).to.be.below(100);
        }
    });
});
