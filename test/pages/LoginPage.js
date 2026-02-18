import BasePage from './basePage';

export default class LoginPage extends BasePage {
    get emailInput() {
        return $('#email');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('input[value="Login"]');
    }

    async open() {
        await browser.url('/auth/login');
    }

    async enterEmail(email) {
        await this.emailInput.setValue(email);
    }

    async enterPassword(password) {
        await this.passwordInput.setValue(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}