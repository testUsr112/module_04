import HomePage from '../pages/HomePage';
import { expect } from 'chai';
describe('Feature: Product sorting', function () {
    let homePage;
    beforeEach(async () => {
        homePage = new HomePage();
        await homePage.open();
    });

    it('Scenario: Sort alphabetically in ascending order', async function () {
        await homePage.filters.setAscendingSortOrder();
        let products = await homePage.getProductNames();
        let sortedProducts = products.sort();
        expect(products).to.equal(sortedProducts);
    });
});
