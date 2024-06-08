import commonPO from "./common";
import signupPO from "./locator/signupLocators";
import commonLocator from "./locator/commonLocator";
class signupPage {
    signup(firstName, lastName, email, password) {
        cy.xpath(signupPO.CreateAccBtn).click()
        this.verifyDisplay()
        cy.xpath(signupPO.FirstNameInput).type(firstName)
        cy.xpath(signupPO.LastNameInput).type(lastName)
        cy.xpath(signupPO.EmailSignInInput).type(email)
        cy.xpath(signupPO.PasswordSignInInput).clear()
        cy.xpath(signupPO.PasswordSignInInput).type(password)
        cy.xpath(signupPO.CreateButton).click()
    }

    verifyDisplay() {
        cy.xpath(signupPO.CreateAccHeader).should("exist").should("be.visible")
        cy.xpath(signupPO.FirstNameInput).should("exist").should("be.visible")
        cy.xpath(signupPO.LastNameInput).should("exist").should("be.visible")
        cy.xpath(signupPO.EmailSignInInput).should("exist").should("be.visible")
        cy.xpath(signupPO.PasswordSignInInput).should("exist").should("be.visible")
    }

    validateSignUpSuccess() {
        //cy.xpath(commonLocator.logoImg).should("exist").should("be.visible")
        cy.xpath(commonLocator.homeHeader).should("exist").should("be.visible")
        cy.xpath(commonLocator.catalogHeader).should("exist").should("be.visible")
        cy.xpath(commonLocator.contactHeader).should("exist").should("be.visible")
    }

    checkFirstNameLimit(lastName, email, password) {
        this.verifyDisplay()
        cy.xpath(signupPO.FirstNameInput).type('A'.repeat(255), { delay: 0})
        cy.xpath(signupPO.LastNameInput).type(lastName)
        cy.xpath(signupPO.EmailSignInInput).type(email)
        cy.xpath(signupPO.PasswordSignInInput).clear()
        cy.xpath(signupPO.PasswordSignInInput).type(password)

        cy.xpath(signupPO.CreateAccBtn).click()
    }

    checkLastNameLimit(firstName, email, password) {
        this.verifyDisplay()
        cy.xpath(signupPO.FirstNameInput).type(firstName)
        cy.xpath(signupPO.LastNameInput).type('A'.repeat(255), { delay: 0})
        cy.xpath(signupPO.EmailSignInInput).type(email)
        cy.xpath(signupPO.PasswordSignInInput).clear()
        cy.xpath(signupPO.PasswordSignInInput).type(password)

        cy.xpath(signupPO.CreateAccBtn).click()
    }

    checkEmailLimit(firstName, lastName, password) {
        this.verifyDisplay()
        cy.xpath(signupPO.FirstNameInput).type(firstName)
        cy.xpath(signupPO.LastNameInput).type(lastName)
        cy.xpath(signupPO.EmailSignInInput).type('A'.repeat(255), { delay: 0})
        cy.xpath(signupPO.PasswordSignInInput).clear()
        cy.xpath(signupPO.PasswordSignInInput).type(password)
        cy.xpath(signupPO.CreateAccBtn).click()
    }

    checkPasswordLimit(firstName, lastName, email) {
        this.verifyDisplay()
        cy.xpath(signupPO.FirstNameInput).type(firstName)
        cy.xpath(signupPO.LastNameInput).type(lastName)
        cy.xpath(signupPO.EmailSignInInput).type(email)
        cy.xpath(signupPO.PasswordSignInInput).clear()
        cy.xpath(signupPO.PasswordSignInInput).type('A'.repeat(50), { delay: 0})
        cy.xpath(signupPO.CreateAccBtn).click()
    }

    validateInvalidEmail(text) {
        cy.xpath(signupPO.InvalidEmailMsg).should('have.text', text)
    }

    validateInvalidPassword(text) {
        cy.xpath(signupPO.InvalidPasswordMsg).should('have.text', text)
    }

    validateInvalidFirstName(text) {
        cy.xpath(signupPO.InvalidFirstNameMsg).should('have.text', text)
    }

    validateInvalidLastName(text) {
        cy.xpath(signupPO.InvalidLastNameMsg).should('have.text', text)
    }

    enterInvalidEmail(firstName, lastName, invalidValue, password) {
        cy.xpath(signupPO.FirstNameInput).type(firstName)
        cy.xpath(signupPO.LastNameInput).type(lastName)
        cy.xpath(signupPO.EmailSignInInput).type(invalidValue)
        cy.xpath(signupPO.PasswordSignInInput).clear()
        cy.xpath(signupPO.PasswordSignInInput).type(password)

        cy.xpath(signupPO.CreateAccBtn).click()
    }

    enterPasswordTooShort(firstName, lastName, email, invalidPassword) {
        cy.xpath(signupPO.FirstNameInput).type(firstName)
        cy.xpath(signupPO.LastNameInput).type(lastName)
        cy.xpath(signupPO.EmailSignInInput).type(email)
        cy.xpath(signupPO.PasswordSignInInput).clear()
        cy.xpath(signupPO.PasswordSignInInput).type(invalidPassword)

        cy.xpath(signupPO.CreateAccBtn).click()
    }
}

const signupPagePO = new signupPage()
export default signupPagePO