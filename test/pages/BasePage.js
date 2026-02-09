class BasePage {
    open(path = '') {
        return browser.url(path);
    }

    get title() {
        return browser.getTitle();
    }

    get url() {
        return browser.getUrl();
    }
}

export default BasePage;