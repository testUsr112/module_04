import BasePage from './basePage';
import FilterElements from './elements/filterElements';

class HomePage extends BasePage {

    get filters() {
        return new FilterElements();
    }

    get firstProduct() {
        return $('.card');
    }

    get productsNames() {
        return $$('[data-test="product-name"]');
    }

    get productPrices() {
        return $$('[data-test="product-price"]');
    }

    get cartIcon() {
        return $('[aria-label="cart"]');
    }

    get cartCount() {
        return $('#lblCartCount');
    }

    get searchInput() {
        return $('#search-query');
    }

    get searchButton() {
        return $('[data-test="search-submit"]');
    }

    get langButton() {
        return $('#language');
    }

    async open() {
        await browser.url('/');
    }

    async getLang() {
        return await this.langButton.getText();
    }

    async selectFirstProduct() {
        await this.firstProduct.click();
    }

    async getProductNames() {
        let names = [];
        let prodNames = await this.productsNames;
        for (let n of prodNames) {
            names.push(await n.getText());
        }
        return names;
    }

    async getProductPrices() {
        let prices = [];
        let prodPrices = await this.productPrices;
        for (let p of prodPrices) {
            prices.push((await p.getText()).substring(1));
        }
        return prices;
    }

    async setSearchStr(str) {
        await this.searchInput.setValue(str);
    }

    async clichSearchButton() {
        await this.searchButton.click();
    }

}

export default new HomePage();