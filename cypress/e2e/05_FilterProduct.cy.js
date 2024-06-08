import credentials from "../fixtures/credentials.json"
import filterProductPagePO from "../support/PageObjects/filterProduct"
import loginPagePO from "../support/PageObjects/loginPage"
import filterProduct from "../fixtures/filterProduct.json"
describe("Filter Product", () => {
    beforeEach('Access to the site', () => {
        cy.visit('https://hatd-test.myshopify.com/account/login');
        
        // Login with valid email and password
        loginPagePO.login(credentials.email, credentials.password);

        // Redriect to Catalog Page
        cy.visit('https://hatd-test.myshopify.com/collections/all')
    })

    it("F01- Filter with a proper price range", () => {
        //Filter Products
        const validPriceRange= filterProduct["validPriceRange"]
        filterProductPagePO.FilterFroduct(validPriceRange.minPrice, validPriceRange.maxPrice)

        // Validate filter successfully
        cy.scrollTo(0,500)
        cy.wait(1000)
        filterProductPagePO.ValidateFilterSuccessfull(validPriceRange.minPrice, validPriceRange.maxPrice)
    })

    it("F02- Filter with min price less than 0", () => {
        //Filter Products
        const validPriceRange= filterProduct["validPriceRange"]
        const invalidPriceRange= filterProduct["invalidPriceRange"]
        filterProductPagePO.FilterFroduct(invalidPriceRange.lessthan0, validPriceRange.maxPrice)

        // Validate filter successfully
        cy.wait(1000)
        filterProductPagePO.VerifyMinPriceInputValue()
    })

    it("F03- Filter with max price more than 80", () => {
        //Filter Products
        const validPriceRange= filterProduct["validPriceRange"]
        const invalidPriceRange= filterProduct["invalidPriceRange"]
        filterProductPagePO.FilterFroduct(validPriceRange.minPrice, invalidPriceRange.morethan80)

        // Validate filter successfully
        cy.wait(500)
        filterProductPagePO.VerifyMaxPriceInputValue()
    })

    it("F04- Filter with min price including letter characters", () => {
        //Filter Products
        const validPriceRange= filterProduct["validPriceRange"]
        const invalidPriceRange= filterProduct["invalidPriceRange"]
        filterProductPagePO.FilterFroduct(invalidPriceRange.letterCharacter, validPriceRange.maxPrice)

        // Validate filter successfully
        cy.wait(1000)
        filterProductPagePO.VerifyMinPriceInputValue()
    })

    it("F05- Filter with min price including special characters", () => {
        //Filter Products
        const validPriceRange= filterProduct["validPriceRange"]
        const invalidPriceRange= filterProduct["invalidPriceRange"]
        filterProductPagePO.FilterFroduct(invalidPriceRange.specialCharacters, validPriceRange.maxPrice)

        // Validate filter successfully
        cy.wait(1000)
        filterProductPagePO.VerifyMinPriceInputValue()
    })

    it("F06- Filter with min price mixing letter and special characters", () => {
        //Filter Products
        const validPriceRange= filterProduct["validPriceRange"]
        const invalidPriceRange= filterProduct["invalidPriceRange"]
        filterProductPagePO.FilterFroduct(invalidPriceRange.mixingSpecialAndLetterCharacter, validPriceRange.maxPrice)
        // Validate filter successfully
        cy.wait(1000)
        filterProductPagePO.VerifyMinPriceInputValue()
    })


    it("F07- Filter with max price including letter characters", () => {
        //Filter Products
        const validPriceRange= filterProduct["validPriceRange"]
        const invalidPriceRange= filterProduct["invalidPriceRange"]
        filterProductPagePO.FilterFroduct(validPriceRange.minPrice, invalidPriceRange.letterCharacter)
        // Validate filter successfully
        cy.wait(1000)
        filterProductPagePO.VerifyMaxPriceInputValue()
    })

    it("F08- Filter with max price including special characters", () => {
        //Filter Products
        const validPriceRange= filterProduct["validPriceRange"]
        const invalidPriceRange= filterProduct["invalidPriceRange"]
        filterProductPagePO.FilterFroduct(validPriceRange.minPrice, invalidPriceRange.specialCharacters)
        // Validate filter successfully
        cy.wait(1000)
        filterProductPagePO.VerifyMaxPriceInputValue()
    })

    it("F09- Filter with max price mixing letter and special characters", () => {
        //Filter Products
        const validPriceRange= filterProduct["validPriceRange"]
        const invalidPriceRange= filterProduct["invalidPriceRange"]
        filterProductPagePO.FilterFroduct(validPriceRange.minPrice, invalidPriceRange.mixingSpecialAndLetterCharacter)

        // Validate filter successfully
        cy.wait(1000)
        filterProductPagePO.VerifyMaxPriceInputValue()
    })
})