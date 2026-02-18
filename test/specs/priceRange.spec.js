import { pages } from '../pages/index.js';
import { expect } from 'chai';

describe('Feature: Price Range filter', function () {
    beforeEach(async () => {
        await pages('home').open();
    });

    it('Scenario: Sort by price range', async function () {
        await pages('home').filters.setMinPrice(49);
        let prices = await pages('home').getProductPrices();
        for (let p of prices) {
            let price = parseFloat(p);
            expect(price).to.be.above(50);
            expect(price).to.be.below(100);
        }
    });
});
