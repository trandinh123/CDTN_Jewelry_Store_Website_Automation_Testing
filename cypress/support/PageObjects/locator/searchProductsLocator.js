class SearchProductLocators {
    SearchIcon= '//summary[@aria-label="Search"]'
    SearchInput= '//input[@id="Search-In-Modal"]'
    ClearSearchButton= '//main-search/form/div[@class="field"]/button[@aria-label="Clear search term"]'
    SearchResult= '//div[@class="card__content"]/div[@class="card__information"]/h3/a'
    NoResultMsg= '//p[contains(text(), "No results found")]'
}

const searchProductLocator = new SearchProductLocators()
export default searchProductLocator