import { loginPage } from '../pages/index.js';
import { assert } from 'chai';

describe('Feature: Sign In', function () {
    beforeEach(async () => {
        await loginPage.open();
    });

    it('Scenario: Sign in with valid credentials', async function () {
        await loginPage.enterEmail('test@test.com');
        await loginPage.enterPassword('123Aa45@');
        await loginPage.clickLoginButton();
        const pageUrl = await browser.getUrl();
        assert.include(pageUrl, '/account', 'User should be on Account page');
    });
});
