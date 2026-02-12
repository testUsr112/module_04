import { homePage } from '../pages/index.js';
import 'chai/register-should';
const languages = ['DE', 'ES', 'FR', 'NL', 'TR'];

describe('Feature: Language change', function () {
    beforeEach(async () => {
        await homePage.open();
    });

    languages.forEach(function (lang) {
        it(`Scenario: Change site language to ${lang}`, async function () {
            let lang = await homePage.getLang();
            lang.should.equal('EN');
        });
    });
});