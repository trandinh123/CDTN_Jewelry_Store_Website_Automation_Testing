import loginPO from './locator/loginLocators';
import accountLocator from './locator/accountLocators';
class loginPage{

    loginShopifySystem() {
        cy.visit('https://hatd-test.myshopify.com/account/login');
        cy.xpath(loginPO.PasswordShopifyInput).clear().type(1)
        cy.xpath(loginPO.EnterButton).click()
    }

    login(username, password){
        //this.verifyDisplay()
        cy.xpath(loginPO.emailLoginInput).clear()
        cy.xpath(loginPO.passwordLoginInput).clear()

        cy.xpath(loginPO.emailLoginInput).type(username)
        cy.xpath(loginPO.passwordLoginInput).type(password)

        cy.xpath(loginPO.signBtn).click()
    }

    verifyDisplay(){
        cy.xpath(loginPO.loginHeader).should("exist").should("be.visible")
        cy.xpath(loginPO.emailLoginInput).should("exist").should("be.visible")
        cy.xpath(loginPO.passwordLoginInput).should("exist").should("be.visible")
        cy.xpath(loginPO.signBtn).should("exist").should("be.visible")
    }

    validateLoginSuccess() {
        cy.xpath(accountLocator.Customer_Title).should("exist").should("be.visible")
        cy.xpath(accountLocator.Log_out).should("exist").should("be.visible")
        cy.xpath(accountLocator.Account_Details_Title).should("exist").should("be.visible")
        cy.xpath(accountLocator.Account_Details).should("exist").should("be.visible")
        cy.xpath(accountLocator.View_Addresses).should("exist").should("be.visible")
        cy.xpath(accountLocator.Order_History_Title).should("exist").should("be.visible")
    }

    checkEmailLimit(password) {
        this.verifyDisplay()
        cy.xpath(loginPO.emailLoginInput).clear()
        cy.xpath(loginPO.passwordLoginInput).clear()
        cy.xpath(loginPO.emailLoginInput).type('A'.repeat(255), { delay: 0})
        cy.xpath(loginPO.passwordLoginInput).type(password)

        cy.xpath(loginPO.signBtn).click()
    }

    checkPasswordLimit(email) {
        this.verifyDisplay()
        cy.xpath(loginPO.emailLoginInput).clear()
        cy.xpath(loginPO.passwordLoginInput).clear()
        cy.xpath(loginPO.emailLoginInput).type(email)
        cy.xpath(loginPO.passwordLoginInput).type('A'.repeat(255), { delay: 0})
        

        cy.xpath(loginPO.signBtn).click()
    }

    validateIncorrectCredentials(errorMsg) {
        cy.xpath(loginPO.errorIncorrectCredentialMsg).contains(errorMsg)
    }

    validateLoginUnSuccess() {
        cy.xpath(loginPO.loginHeader).should("exist").should("be.visible")
        cy.xpath(loginPO.emailLoginInput).should("exist").should("be.visible")
        cy.xpath(loginPO.passwordLoginInput).should("exist").should("be.visible")
        cy.xpath(loginPO.signBtn).should("exist").should("be.visible")
    }

    logout() {
        cy.xpath(loginPO.logoutButton).click()
    }
}

const loginPagePO = new loginPage();

export default loginPagePO;