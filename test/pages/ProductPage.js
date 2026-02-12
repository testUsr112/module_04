import BasePage from './basePage';

class ProductPage extends BasePage {
    get productName() {
        return $('[data-test="product-name"]');
    }

    get productImage() {
        return $('.figure-img img-fluid');
    }

    get productPrice() {
        return $('[data-test="unit-price"]');
    }

    get productDescription() {
        return $('#description');
    }

    get quantityInput() {
        return $('#quantity-input');
    }

    get addToCartButton() {
        return $('#btn-add-to-cart');
    }

    get cartItemsQuantity() {
        return $('#lblCartCount');
    }

    get cartIcon() {
        return $('[aria-label="cart"]');
    }

    get addToFavoritesButton() {
        return $('#btn-add-to-favorites');
    }

    get favoritesOpt() {
        return $('=My favorites');
    }

    get toast() {
        return $('div[role="alert"]');
    }

    get accountDropdown() {
        return $('#menu');
    }

    async openProductPage(prodId) {
        await browser.url('/product/' + prodId);
    }

    async setQuantityInput(quantity) {
        await this.quantityInput.setValue(quantity);
    }

    async clickAddToCartButton() {
        await this.addToCartButton.click();
    }

    async getCartItemsQuantity() {
        return await this.cartItemsQuantity.getText();
    }

    async clickCartIcon() {
        await this.cartIcon.click();
    }

    async clickAddToFavoritesButton() {
        await this.addToFavoritesButton.click();
    }

    async getToastMsg() {
        return await this.toast.getText();
    }

    async clickAccountDropdown() {
        await this.accountDropdown.click();
    }

    async clickMyFavorites() {
        await this.favoritesOpt.click();
    }
}

export default new ProductPage();
