class SortProductLocators {
    SortSelection= '//div[@class="boost-sd__sorting-button"]'
    SortByTitleAscendingOpt= '//li[text()="Title ascending"]'
    SortByTitleDescendingOpt= '//li[text()="Title descending"]'
    SortByPriceAscendingOpt= '//li[text()="Price ascending"]'
    SortByPriceDescendingOpt= '//li[text()="Price descending"]'
}

const sortProductLocator = new SortProductLocators()
export default sortProductLocator