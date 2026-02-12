import { homePage } from '../pages/index.js';
import 'chai/register-should';

describe('Feature: Search', function () {
    beforeEach(async () => {
        await homePage.open();
    });
    it('Scenario: Search by full or partial name', async function () {
        await homePage.setSearchStr('claw');
        await homePage.clichSearchButton();
        let products = await homePage.getProductNames();
        for (let product of products) {
            console.log(product);
            product.toLowerCase().should.include('claw');
        }
    });
});
