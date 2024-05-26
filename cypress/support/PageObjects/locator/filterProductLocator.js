class FilterProductLocators {
    PriceRange= '//button[contains(text(),"Price")]'
    MinPrice= '//input[@aria-label="Min value"]'
    MaxPrice= '//input[@aria-label="Max value"]'
    FilterCondition= '//span[contains(text(), "Price")]/../span[2]'
}

const filterProductLocator = new FilterProductLocators()
export default filterProductLocator