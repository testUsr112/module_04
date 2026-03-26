import { pages } from '../pages/index.js';
import 'chai/register-should';
const languages = ['DE', 'ES', 'FR', 'NL', 'TR'];

describe('Feature: Language change', function () {
    beforeEach(async () => {
        await pages('home').open();
    });

    languages.forEach(function (lang) {
        it(`Scenario: Change site language to ${lang}`, async function () {
            let lang = await pages('home').getLang();
            lang.should.equal('EN');
        });
    });
});