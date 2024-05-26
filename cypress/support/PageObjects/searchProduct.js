import searchProductLocator from "./locator/searchProductsLocator";

class searchProductPage{
    SearchProduct(productName) {
        cy.xpath(searchProductLocator.SearchIcon).click()
        cy.xpath(searchProductLocator.SearchInput).type(productName).type('{enter}')
    }

    ValidateSearchResult(number, productName) {
        for(var i=1; i < number*2; i+=2) {
            cy.xpath(searchProductLocator.SearchResult).eq(i).contains(productName)
        }
    }

    ValidateNoResultMsg() {
        cy.xpath(searchProductLocator.NoResultMsg).should("exist").should("be.visible")
    }
    
   
}

const searchProductPagePO = new searchProductPage();

export default searchProductPagePO;