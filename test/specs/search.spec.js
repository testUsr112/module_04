import { pages } from '../pages/index.js';
import 'chai/register-should';

describe('Feature: Search', function () {
    beforeEach(async () => {
        await pages('home').open();
    });
    it('Scenario: Search by full or partial name', async function () {
        await pages('home').setSearchStr('claw');
        await pages('home').clichSearchButton();
        let products = await pages('home').getProductNames();
        for (let product of products) {
            console.log(product);
            product.toLowerCase().should.include('claw');
        }
    });
});
