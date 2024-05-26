import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import loginPO from '../PageObjects/locator/loginLocators'
import accountLocator from '../PageObjects/locator/accountLocators'

Given('I am on the login page', () => {
    cy.visit('https://hatd-test.myshopify.com/account/login');
    cy.xpath(loginPO.PasswordShopifyInput).clear().type(1)
    cy.xpath(loginPO.EnterButton).click()
    cy.visit('https://hatd-test.myshopify.com/account/login')
})

When('I enter valid email and password', () => {
    cy.fixture('credentials.json').then((credentials) => {
        cy.xpath(loginPO.emailLoginInput).type(credentials.email)
        cy.xpath(loginPO.passwordLoginInput).type(credentials.password)
    })
})

When('I click on login button', () => {
    cy.xpath(loginPO.signBtn).click()
})

Then('I should logged in and redirected to account page', () => {
    cy.xpath(accountLocator.Customer_Title).should("exist").should("be.visible")
    cy.xpath(accountLocator.Log_out).should("exist").should("be.visible")
    cy.xpath(accountLocator.Account_Details_Title).should("exist").should("be.visible")
    cy.xpath(accountLocator.Account_Details).should("exist").should("be.visible")
    cy.xpath(accountLocator.View_Addresses).should("exist").should("be.visible")
    cy.xpath(accountLocator.Order_History_Title).should("exist").should("be.visible")
})

When('I enter invalid email and password', () => {
    cy.fixture('credentials.json').then((credentials) => {
        cy.xpath(loginPO.emailLoginInput).type(credentials.invalidValues.notExistingEmail)
        cy.xpath(loginPO.passwordLoginInput).type(credentials.invalidValues.notExistingPassword)
    })
})

Then('I should see invalid credentials message', () => {
    cy.fixture('credentials.json').then((credentials) => {
        cy.xpath(loginPO.errorIncorrectCredentialMsg).contains(credentials.errorMsg)
    }
)})

When('I leave the email and password field empty', () => {
    cy.xpath(loginPO.emailLoginInput).clear()
    cy.xpath(loginPO.passwordLoginInput).clear()
})
