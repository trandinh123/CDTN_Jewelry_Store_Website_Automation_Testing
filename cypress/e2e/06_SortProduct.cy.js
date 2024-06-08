import credentials from "../fixtures/credentials.json"
import sortProductPagePO from "../support/PageObjects/sortProduct"
import loginPagePO from "../support/PageObjects/loginPage"

describe("Sort Product", () => {
    beforeEach('Access to the site', () => {
        cy.visit('https://hatd-test.myshopify.com/account/login');
        
        // Login with valid email and password
        loginPagePO.login(credentials.email, credentials.password);

        // Redriect to Catalog Page
        cy.visit('https://hatd-test.myshopify.com/collections/all')
    })

    it("SO01- Sort Product By Title Ascending", () => {
        // Sort by title ascending
        sortProductPagePO.SortByTitleAscendingOpt()
        cy.wait(500)
        // Validate Result
        sortProductPagePO.ValidateSortByTitleAscendingResult()
       
    })

    it("SO02- Sort Product By Title Descending", () => {
        // Sort by title descending
        sortProductPagePO.SortByTitleDescendingOpt()
        cy.wait(500)
        // Validate Result
        sortProductPagePO.ValidateSortByTitleDescendingResult()
       
    })

    it("SO03- Sort Product By Price Ascending", () => {
        // Sort by price ascending
        sortProductPagePO.SortByPriceAscendingOpt()
        cy.wait(1000)
        cy.scrollTo(0, 1000)
        cy.wait(1000)
        // Validate Result
        sortProductPagePO.ValidateSortByPriceAscendingResult()
       
    })

    it("SO04- Sort Product By Price Descending", () => {
        // Sort by price descending
        sortProductPagePO.SortByPriceDescendingOpt()
        cy.wait(1000)
        cy.scrollTo(0, 1000)
        cy.wait(1000)
        // Validate Result
        sortProductPagePO.ValidateSortByPriceDescendingResult()
       
    })

})