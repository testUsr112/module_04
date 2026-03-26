import LoginPage from './loginPage.js';
import HomePage from './homePage.js';
import CartPage from './cartPage.js';
import ProductPage from './productPage.js';

export function pages(name) {
    const items = {
        login: new LoginPage(),
        home: new HomePage(),
        cart: new CartPage(),
        product: new ProductPage()
    }
    return items[(name)];
}