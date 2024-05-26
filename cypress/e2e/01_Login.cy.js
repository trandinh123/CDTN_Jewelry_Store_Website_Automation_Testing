import loginPagePO from "../support/PageObjects/loginPage.js"
import credentials from "../fixtures/credentials.json"
import loginPO from "../support/PageObjects/locator/loginLocators.js";

describe('Login Testing', () => {
    beforeEach('Access to the site', () => {
        loginPagePO.loginShopifySystem()
        cy.visit('https://hatd-test.myshopify.com/account/login');
      })

    it('L01 - Login with correct credentials', () => {
        // Login with valid username and password
        loginPagePO.login(credentials.email, credentials.password);

        // Validate login successful
        cy.wait(500)
        loginPagePO.validateLoginSuccess()
    })

    it('L02 - Login with incorrect credentials', () => {
        // Get login data
        const loginValues = credentials["invalidValues"]

        // Login with invalid email and password
        loginPagePO.login(loginValues.notExistingEmail, loginValues.notExistingPassword);

        // Check error message
        loginPagePO.validateIncorrectCredentials(credentials.errorMsg)

        // Validate login unsuccessful
        loginPagePO.validateLoginUnSuccess()
    })

    it('L03 - Login with not existing email', () => {
        // Get login data
        const loginValues = credentials["invalidValues"]

        // Login with invalid email
        loginPagePO.login(loginValues.notExistingEmail, credentials.password);

        // Check error message
        loginPagePO.validateIncorrectCredentials(credentials.errorMsg)

        // Validate login unsuccessful
        loginPagePO.validateLoginUnSuccess()
    })

    it('L04 - Login with invalid email - just including letter characters', () => {
        // Get login data
        const loginValues = credentials["invalidValues"]

        // Login with invalid email
        loginPagePO.login(loginValues.letterCharacterEmail, credentials.password);

        // Check error message
        loginPagePO.validateIncorrectCredentials(credentials.errorMsg)

        // Validate login unsuccessful
        loginPagePO.validateLoginUnSuccess()
    })

    it('L05 - Login with invalid email - just including number characters', () => {
        // Get login data
        const loginValues = credentials["invalidValues"]

        // Login with invalid email
        loginPagePO.login(loginValues.numberCharacters, credentials.password);

        // Check error message
        loginPagePO.validateIncorrectCredentials(credentials.errorMsg)

        // Validate login unsuccessful
        loginPagePO.validateLoginUnSuccess()
    })

    it('L06 - Login with invalid email - just including special characters', () => {
        // Get login data
        const loginValues = credentials["invalidValues"]

        // Login with invalid email
        loginPagePO.login(loginValues.specialCharacters, credentials.password);

        // Check error message
        loginPagePO.validateIncorrectCredentials(credentials.errorMsg)

        // Validate login unsuccessful
        loginPagePO.validateLoginUnSuccess()
    })

    it('L07 - Login with invalid email - mixing number, special and letter characters', () => {
        // Get login data
        const loginValues = credentials["invalidValues"]

        // Login with invalid email
        loginPagePO.login(loginValues.mixingNumberSpecialAndLetterCharacter, credentials.password);

        // Check error message
        loginPagePO.validateIncorrectCredentials(credentials.errorMsg)

        // Validate login unsuccessful
        loginPagePO.validateLoginUnSuccess()
    })

    it('L08 - Login with invalid email - missing @ character characters', () => {
        // Get login data
        const loginValues = credentials["invalidValues"]

        // Login with invalid email
        loginPagePO.login(loginValues["mising@Character"], credentials.password);

        // Check error message
        loginPagePO.validateIncorrectCredentials(credentials.errorMsg)

        // Validate login unsuccessful
        loginPagePO.validateLoginUnSuccess()
    })

    it('L09 - Login with invalid email - missing gmail characters', () => {
        // Get login data
        const loginValues = credentials["invalidValues"]

        // Login with invalid email
        loginPagePO.login(loginValues.missinggmailCharacter, credentials.password);

        // Check error message
        loginPagePO.validateIncorrectCredentials(credentials.errorMsg)

        // Validate login unsuccessful
        loginPagePO.validateLoginUnSuccess()
    })

    it('L10 - Login with invalid password', () => {
        // Get login data
        const loginValues = credentials["invalidValues"]

        // Login with invalid password
        loginPagePO.login(credentials.email, loginValues.notExistingPassword);

        // Check error message
        loginPagePO.validateIncorrectCredentials(credentials.errorMsg)

        // Validate login unsuccessful
        loginPagePO.validateLoginUnSuccess()
    })

    it('L11 - Login with too short password', () => {
        // Get login data
        const loginValues = credentials["invalidValues"]

        // Login with invalid password
        loginPagePO.login(credentials.email, loginValues.passwordTooShort);

        // Check error message
        loginPagePO.validateIncorrectCredentials(credentials.errorMsg)

        // Validate login unsuccessful
        loginPagePO.validateLoginUnSuccess()
    })


    it('L12 - Login with email and password blank', () => {
        // Leave username and password blank and log in
        cy.xpath(loginPO.signBtn).click()

        // Check error message
        loginPagePO.validateIncorrectCredentials(credentials.errorMsg)

        // Validate login unsuccessful
        loginPagePO.validateLoginUnSuccess()
    })

    it('L13 - Login with existing email and leave password blank', () => {
        // Leave password blank and log in
        cy.xpath(loginPO.emailLoginInput).type(credentials.email)
        cy.xpath(loginPO.signBtn).click()

        // Check error message
        loginPagePO.validateIncorrectCredentials(credentials.errorMsg)

        // Validate login unsuccessful
        loginPagePO.validateLoginUnSuccess()
    })

    it('L14 - Login with existing password and leave email blank', () => {
         // Leave username blank and log in
        cy.xpath(loginPO.passwordLoginInput).type(credentials.password)
        cy.xpath(loginPO.signBtn).click()

        // Check error message
        loginPagePO.validateIncorrectCredentials(credentials.errorMsg)
 
        // Validate login unsuccessful
        loginPagePO.validateLoginUnSuccess()
    })
    
    
})