import HomePage from '../pages/HomePage';
import 'chai/register-should';
describe('Feature: Search', function () {
    let homePage;
    beforeEach(async () => {
        homePage = new HomePage();
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
