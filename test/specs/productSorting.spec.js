import { pages } from '../pages/index.js';
import { expect } from 'chai';
describe('Feature: Product sorting', function () {
    beforeEach(async () => {
        await pages('home').open();
    });

    it('Scenario: Sort alphabetically in ascending order', async function () {
        await pages('home').filters.setAscendingSortOrder();
        let products = await pages('home').getProductNames();
        let sortedProducts = products.sort();
        expect(products).to.equal(sortedProducts);
    });
});
