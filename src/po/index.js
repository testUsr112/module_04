import LoginPage from './pages/loginPage.js';
import HomePage from './pages/homePage.js';
import CartPage from './pages/cartPage.js';
import ProductPage from './pages/productPage.js';

export function pages(name) {
    const items = {
        login: new LoginPage(),
        home: new HomePage(),
        cart: new CartPage(),
        product: new ProductPage()
    }
    return items[(name)];
}