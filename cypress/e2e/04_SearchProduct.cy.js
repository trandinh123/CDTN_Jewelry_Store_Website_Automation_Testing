import credentials from "../fixtures/credentials.json"
import searchProductPagePO from "../support/PageObjects/searchProduct"
import searchProduct from "../fixtures/searchProduct.json"
import loginPagePO from "../support/PageObjects/loginPage"

describe("Search Product", () => {
    beforeEach('Access to the site', () => {
        cy.visit('https://hatd-test.myshopify.com/account/login');

        // Login with valid email and password
        loginPagePO.login(credentials.email, credentials.password);

        // Redriect to Catalog Page
        cy.visit('https://hatd-test.myshopify.com/collections/all')
    })

    it("S01- Search following collection", () => {
        // Search product following collection
        searchProductPagePO.SearchProduct(searchProduct.Collection)

        // Validate Search Result
        searchProductPagePO.ValidateSearchResult(5, searchProduct.Collection)
    })

    it("S02- Search following a certain product", () => {
        // Search product following collection
        searchProductPagePO.SearchProduct(searchProduct.CertainProduct)

        // Validate Search Result
        searchProductPagePO.ValidateSearchResult(1, searchProduct.CertainProduct)
    })
    
    it("S03- Search a not existing product", () => {
        // Search product following collection
        searchProductPagePO.SearchProduct(searchProduct.NoExistProduct)

        // Validate Search Result
        searchProductPagePO.ValidateNoResultMsg()
    })

    it("S04- Search a not existing collection", () => {
        // Search product following collection
        searchProductPagePO.SearchProduct(searchProduct.NoExistCollection)

        // Validate Search Result
        searchProductPagePO.ValidateNoResultMsg()
    })

})