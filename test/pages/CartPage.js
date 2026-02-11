import BasePage from './basePage';

class CartPage extends BasePage {

    get product() {
        return $('.product-title');
    }

    get productQuantity() {
        return $('[data-test="product-quantity"]');
    }

    get productPrice() {
        return $('[data-test="product-price"]');
    }

    get totalPrice() {
        return $('[data-test="cart-total"]');
    }

    async getProductName() {
        return await this.product.getText();
    }

    async getProductQuantity() {
        return await this.productQuantity.getValue();
    }

    async getProductPrice() {
        return await this.productPrice.getText();
    }

    async getTotalPrice() {
        return await this.totalPrice.getText();
    }
}

export default CartPage;
