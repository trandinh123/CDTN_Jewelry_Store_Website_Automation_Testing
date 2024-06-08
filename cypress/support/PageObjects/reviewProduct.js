import reviewProductLocator from "./locator/reviewProductLocators"
import productPagePO from "./addProduct";
class reviewProductPage{
    ChooseReviewProduct() {
        productPagePO.ViewProductDetail()
        cy.scrollTo('0px', '500px')
        cy.xpath(reviewProductLocator.WriteReviewButton).click()
        cy.wait(500)
        cy.scrollTo('0px', '500px')
        cy.xpath(reviewProductLocator.WriteReviewHeader).should("exist").should("be.visible")
    }

    RatingStar() {
        cy.xpath(reviewProductLocator.StarRating5).click()
    }

    ReviewProduct(reviewTitle, reviewContent, reviewName, reviewEmail) {
        cy.xpath(reviewProductLocator.ReviewTitleInput).eq(0).type(reviewTitle)
        cy.xpath(reviewProductLocator.ReviewInput).eq(0).type(reviewContent)
        cy.xpath(reviewProductLocator.ReviewNameInput).eq(0).type(reviewName)
        cy.xpath(reviewProductLocator.ReviewEmailInput).eq(0).type(reviewEmail)
        cy.xpath(reviewProductLocator.SubmitReviewButton).eq(0).click()
    }

    LeaveReviewContentFieldEmpty(reviewTitle, reviewName, reviewEmail) {
        cy.xpath(reviewProductLocator.StarRating5).click()
        cy.xpath(reviewProductLocator.ReviewTitleInput).eq(0).type(reviewTitle)
        cy.xpath(reviewProductLocator.ReviewNameInput).eq(0).type(reviewName)
        cy.xpath(reviewProductLocator.ReviewEmailInput).eq(0).type(reviewEmail)
        cy.xpath(reviewProductLocator.SubmitReviewButton).eq(0).click()
    }

    LeaveReviewNameFielđEmpty(reviewTitle, reviewContent, reviewEmail) {
        cy.xpath(reviewProductLocator.StarRating5).click()
        cy.xpath(reviewProductLocator.ReviewTitleInput).eq(0).type(reviewTitle)
        cy.xpath(reviewProductLocator.ReviewInput).eq(0).type(reviewContent)
        cy.xpath(reviewProductLocator.ReviewEmailInput).eq(0).type(reviewEmail)
        cy.xpath(reviewProductLocator.SubmitReviewButton).eq(0).click()
    }

    LeaveReviewEmailEmpty(reviewTitle, reviewContent, reviewName) {
        cy.xpath(reviewProductLocator.StarRating5).click()
        cy.xpath(reviewProductLocator.ReviewTitleInput).eq(0).type(reviewTitle)
        cy.xpath(reviewProductLocator.ReviewInput).eq(0).type(reviewContent)
        cy.xpath(reviewProductLocator.ReviewNameInput).eq(0).type(reviewName)
        cy.xpath(reviewProductLocator.SubmitReviewButton).eq(0).click()
    }
    
    VerifyReviewSuccessfull(score, reviewTitle, reviewContent, reviewName) {
        cy.xpath(reviewProductLocator.RatedStar).eq(1).invoke('attr', 'data-score').should('eq', score)
        cy.xpath(reviewProductLocator.ReviewName).eq(0).contains(reviewName)
        cy.xpath(reviewProductLocator.ReviewTitle).eq(0).contains(reviewTitle)
        cy.xpath(reviewProductLocator.ReviewContent).eq(0).contains(reviewContent)
    }

    ValidateEmptyErrMsg(index) {
        cy.xpath(reviewProductLocator.RequiredErrorMsg).eq(index).should("exist").should("be.visible")
    }

    ValidateInvalidEmailErrMsg() {
        cy.xpath(reviewProductLocator.InvalidErrorMsg).should("exist").should("be.visible")
    }

    ValidateCfSuccessfullMsg() {
        cy.xpath(reviewProductLocator.CfSuccessfullMsg).should("exist").should("be.visible")
    }
   
    EnterInvalidEmail(reviewTitle, reviewContent, reviewName, invalidEmail) {
        cy.xpath(reviewProductLocator.ReviewTitleInput).eq(0).type(reviewTitle)
        cy.xpath(reviewProductLocator.ReviewInput).eq(0).type(reviewContent)
        cy.xpath(reviewProductLocator.ReviewNameInput).eq(0).type(reviewName)
        cy.xpath(reviewProductLocator.ReviewEmailInput).eq(0).type(invalidEmail)
        cy.xpath(reviewProductLocator.SubmitReviewButton).eq(0).click()
    }

    EnterEmailTooLong(reviewTitle, reviewContent, reviewName) {
        cy.xpath(reviewProductLocator.ReviewTitleInput).eq(0).type(reviewTitle)
        cy.xpath(reviewProductLocator.ReviewInput).eq(0).type(reviewContent)
        cy.xpath(reviewProductLocator.ReviewNameInput).eq(0).type(reviewName)
        cy.xpath(reviewProductLocator.ReviewEmailInput).eq(0).type('A'.repeat(255), { delay: 0})
        cy.xpath(reviewProductLocator.SubmitReviewButton).eq(0).click()
    }

    ViewReviewList() {
        cy.xpath(reviewProductLocator.CustomerReviewTitle).should("exist").should("be.visible")
        cy.xpath(reviewProductLocator.SummaryStar).should("exist").should("be.visible")
        cy.xpath(reviewProductLocator.ReviewLists).should("exist").should("be.visible")
        cy.xpath(reviewProductLocator.ReviewerProfile).should("exist").should("be.visible")
        cy.xpath(reviewProductLocator.ReviewTitle).should("exist").should("be.visible")
        cy.xpath(reviewProductLocator.ReviewContent).should("exist").should("be.visible")
    }
}

const reviewProductPagePO = new reviewProductPage();

export default reviewProductPagePO;