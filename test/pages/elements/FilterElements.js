class FilterElements {

    get sortDropdown() {
        return $('[aria-label="sort"]');
    }

    get priceSliderMin() {
        return $('.ngx-slider-pointer-min');
    }

    get priceSliderMax() {
        return $('[aria-label="ngx-slider-max"]');
    }

    get slider() {
        return $('[aria-label="ngx-slider"]');
    }

    async setAscendingSortOrder() {
        await this.sortDropdown.selectByAttribute('value', 'name,asc');
    }

    async setMinPrice(minPrice) {
        await this.priceSliderMin.click();
        for (let i = 0; i < minPrice; i++) {
            await browser.keys('ArrowRight');
        }
    }

    async setMaxPrice(maxPrice) {
        /*await this.priceSliderMax.click();
        for (let i = 0; i < 100; i++) {
            await browser.keys('ArrowLeft');
        }*/
    }
}
export default FilterElements;