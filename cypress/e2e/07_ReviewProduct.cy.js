import credentials from "../fixtures/credentials.json"
import reviewProductPagePO from "../support/PageObjects/reviewProduct"
import loginPagePO from "../support/PageObjects/loginPage"
import reviewProduct from "../fixtures/reviewProduct.json"
import productPagePO from "../support/PageObjects/addProduct"
describe("Filter Product", () => {
    beforeEach('Access to the site', () => {
       
        cy.visit('https://hatd-test.myshopify.com/account/login');
       
        // Login with valid email and password
        loginPagePO.login(credentials.email, credentials.password);

        // Redriect to Catalog Page
        cy.visit('https://hatd-test.myshopify.com/collections/all')
    })

    it("R01- Review Product", () => {
       // Choose review product
       reviewProductPagePO.ChooseReviewProduct()
       // Rating star
       cy.wait(500)
       reviewProductPagePO.RatingStar()
       // Review Product
       reviewProductPagePO.ReviewProduct(reviewProduct.reviewTitle, reviewProduct.reviewContent, reviewProduct.reviewName, reviewProduct.reviewEmail)

       // Verify review successfully
       cy.wait(500)
       reviewProductPagePO.ValidateCfSuccessfullMsg()
       reviewProductPagePO.VerifyReviewSuccessfull(reviewProduct.score, reviewProduct.reviewTitle, reviewProduct.reviewContent, reviewProduct.reviewName)
    })

    it("R02 - Leave Rating Star field empty", () => {
        // Choose review product
       reviewProductPagePO.ChooseReviewProduct()

       // Review Product
       cy.wait(500)
       reviewProductPagePO.ReviewProduct(reviewProduct.reviewTitle, reviewProduct.reviewContent, reviewProduct.reviewName, reviewProduct.reviewEmail)

       // Validate error message
       cy.wait(500)
       reviewProductPagePO.ValidateEmptyErrMsg(0)
    })

    it("R03 - Leave Review Content field empty", () => {
        // Choose review product
       reviewProductPagePO.ChooseReviewProduct()

       // Review Product
       cy.wait(500)
       reviewProductPagePO.RatingStar()
       reviewProductPagePO.LeaveReviewContentFieldEmpty(reviewProduct.reviewTitle, reviewProduct.reviewName, reviewProduct.reviewEmail)

       // Validate error message
       cy.wait(500)
       reviewProductPagePO.ValidateEmptyErrMsg(0)
    })

    it("R04 - Leave Review Name field empty", () => {
        // Choose review product
       reviewProductPagePO.ChooseReviewProduct()

       // Review Product
       cy.wait(500)
       reviewProductPagePO.RatingStar()
       reviewProductPagePO.LeaveReviewNameFielđEmpty(reviewProduct.reviewTitle, reviewProduct.reviewContent, reviewProduct.reviewEmail)

       // Validate error message
       cy.wait(500)
       reviewProductPagePO.ValidateEmptyErrMsg(0)
    })

    it("R05 - Leave Review Email field empty", () => {
        // Choose review product
       reviewProductPagePO.ChooseReviewProduct()

       // Review Product
       cy.wait(500)
       reviewProductPagePO.RatingStar()
       reviewProductPagePO.LeaveReviewEmailEmpty(reviewProduct.reviewTitle, reviewProduct.reviewContent, reviewProduct.reviewName)

       // Validate error message
       cy.wait(500)
       reviewProductPagePO.ValidateEmptyErrMsg(0)
    })

    it("R06 - Enter invalid email - just including letter characters", () => {
        const invalidEmail = reviewProduct["invalidEmail"]
        // Choose review product
       reviewProductPagePO.ChooseReviewProduct()

       // Review Product
       cy.wait(500)
       reviewProductPagePO.RatingStar()
       reviewProductPagePO.EnterInvalidEmail(reviewProduct.reviewTitle, reviewProduct.reviewContent, reviewProduct.reviewName, invalidEmail.letterCharacterEmail)

       // Validate error message
       cy.wait(500)
       reviewProductPagePO.ValidateInvalidEmailErrMsg()
    })

    it("R07 - Enter invalid email - just including special characters", () => {
        const invalidEmail = reviewProduct["invalidEmail"]
        // Choose review product
       reviewProductPagePO.ChooseReviewProduct()

       // Review Product
       cy.wait(500)
       reviewProductPagePO.RatingStar()
       reviewProductPagePO.EnterInvalidEmail(reviewProduct.reviewTitle, reviewProduct.reviewContent, reviewProduct.reviewName, invalidEmail.specialCharacters)

       // Validate error message
       cy.wait(500)
       reviewProductPagePO.ValidateInvalidEmailErrMsg()
    })

    it("R08 - Enter invalid email - just including number characters", () => {
        const invalidEmail = reviewProduct["invalidEmail"]
        // Choose review product
       reviewProductPagePO.ChooseReviewProduct()

       // Review Product
       cy.wait(500)
       reviewProductPagePO.RatingStar()
       reviewProductPagePO.EnterInvalidEmail(reviewProduct.reviewTitle, reviewProduct.reviewContent, reviewProduct.reviewName, invalidEmail.numberCharacters)

       // Validate error message
       cy.wait(500)
       reviewProductPagePO.ValidateInvalidEmailErrMsg()
    })

    it("R09 - Enter invalid email - just including mixing letter, number and special characters", () => {
        const invalidEmail = reviewProduct["invalidEmail"]
        // Choose review product
       reviewProductPagePO.ChooseReviewProduct()

       // Review Product
       cy.wait(500)
       reviewProductPagePO.RatingStar()
       reviewProductPagePO.EnterInvalidEmail(reviewProduct.reviewTitle, reviewProduct.reviewContent, reviewProduct.reviewName, invalidEmail.mixingSpecialAndLetterAndNumberCharacter)

       // Validate error message
       cy.wait(500)
       reviewProductPagePO.ValidateInvalidEmailErrMsg()
    })

    it("R10 - Enter invalid email - missing @ character", () => {
        const invalidEmail = reviewProduct["invalidEmail"]
        // Choose review product
       reviewProductPagePO.ChooseReviewProduct()

       // Review Product
       cy.wait(500)
       reviewProductPagePO.RatingStar()
       reviewProductPagePO.EnterInvalidEmail(reviewProduct.reviewTitle, reviewProduct.reviewContent, reviewProduct.reviewName, invalidEmail["mising@Character"])

       // Validate error message
       cy.wait(500)
       reviewProductPagePO.ValidateInvalidEmailErrMsg()
    })

    it("R11 - Enter invalid email - missing gmail characters", () => {
        const invalidEmail = reviewProduct["invalidEmail"]
        // Choose review product
       reviewProductPagePO.ChooseReviewProduct()

       // Review Product
       cy.wait(500)
       reviewProductPagePO.RatingStar()
       reviewProductPagePO.EnterInvalidEmail(reviewProduct.reviewTitle, reviewProduct.reviewContent, reviewProduct.reviewName, invalidEmail.missinggmailCharacter)

       // Validate error message
       cy.wait(500)
       reviewProductPagePO.ValidateInvalidEmailErrMsg()
    })

    it("R12 - Enter invalid email - too long email", () => {
        // Choose review product
       reviewProductPagePO.ChooseReviewProduct()

       // Review Product
       cy.wait(500)
       reviewProductPagePO.RatingStar()
       reviewProductPagePO.EnterEmailTooLong(reviewProduct.reviewTitle, reviewProduct.reviewContent, reviewProduct.reviewName)

       // Validate error message
       cy.wait(500)
       reviewProductPagePO.ValidateInvalidEmailErrMsg()
    })

    it("R13 - View Review List", () => {
        // Redriect to view product detail page
        productPagePO.ViewProductDetail()

        // View Review List
        reviewProductPagePO.ViewReviewList()
    })



})