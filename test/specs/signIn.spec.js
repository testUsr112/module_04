import { pages } from '../pages/index.js';
import { assert } from 'chai';

describe('Feature: Sign In', function () {
    beforeEach(async () => {
        await pages('login').open();
    });

    it('Scenario: Sign in with valid credentials', async function () {
        await pages('login').enterEmail('test@test.com');
        await pages('login').enterPassword('123Aa45@');
        await pages('login').clickLoginButton();
        const pageUrl = await browser.getUrl();
        assert.include(pageUrl, '/account', 'User should be on Account page');
    });
});
