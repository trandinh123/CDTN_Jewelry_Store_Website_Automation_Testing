import credentials from "../fixtures/credentials.json"
import loginPagePO from "../support/PageObjects/loginPage"
import AccountInfoPagePO from "../support/PageObjects/accountInformation"
import accountInfo from "../fixtures/accountInfo.json"

describe("Account Information Management", () => {
    beforeEach('Access to the site', () => {
        cy.visit('https://hatd-test.myshopify.com/account/login');
        // Login with valid email and password
        loginPagePO.login(credentials.email, credentials.password);
    })

    it("A01- Verify Account Information", () => {
        // Redriect to the Account page
        cy.visit("https://hatd-test.myshopify.com/account")

        // Verify Account Information
        AccountInfoPagePO.VerifyAccountInfomation()
    })

    it("A02- View Address Information", () => {
        // Redriect to the Account page
        cy.visit("https://hatd-test.myshopify.com/account")

        // Verify Account Information
        AccountInfoPagePO.VerifyAccountInfomation()

        // Click View Address Button
        AccountInfoPagePO.ClickViewAddressButton()

        // Verify Address Info
        AccountInfoPagePO.VerifyAddressInfo()
    })

    it("A03- Add address", () => {
        const NewAddress = accountInfo["NewAddressInfo"]
        // Redriect to the Account page
        cy.visit("https://hatd-test.myshopify.com/account")

        // Verify Account Information
        AccountInfoPagePO.VerifyAccountInfomation()

        // Click View Address Button
        AccountInfoPagePO.ClickViewAddressButton()

        // Add address
        AccountInfoPagePO.AddAddress(NewAddress.FirstName, NewAddress.LastName, NewAddress.Company, NewAddress.Address1, NewAddress.Address2, NewAddress.City, NewAddress.Country, NewAddress.ZIPCode, NewAddress.Phone)
        AccountInfoPagePO.ClickSaveNewAddress()

        // Verify add address successfully
        cy.wait(500)
        AccountInfoPagePO.VerifyNewAddressInfo(NewAddress.FirstName, NewAddress.LastName)
    })

    it("A04- Set default address in the Add address screen", () => {
        const NewAddress = accountInfo["NewAddressInfo"]
        // Redriect to the Account page
        cy.visit("https://hatd-test.myshopify.com/account")

        // Verify Account Information
        AccountInfoPagePO.VerifyAccountInfomation()

        // Click View Address Button
        AccountInfoPagePO.ClickViewAddressButton()

        // Add address
        AccountInfoPagePO.AddAddress(NewAddress.FirstName, NewAddress.LastName, NewAddress.Company, NewAddress.Address1, NewAddress.Address2, NewAddress.City, NewAddress.Country, NewAddress.ZIPCode, NewAddress.Phone)

        // Set default address
        AccountInfoPagePO.SetNewDefaultAddress()
        AccountInfoPagePO.ClickSaveNewAddress()

        // Verify add address successfully
        cy.wait(500)
        AccountInfoPagePO.VerifyDefaultAddressInfo(NewAddress.FirstName, NewAddress.LastName)
    })

    it("A05- Cancel add new address", () => {
        const NewAddress = accountInfo["NotExistAddress"]
        // Redriect to the Account page
        cy.visit("https://hatd-test.myshopify.com/account")

        // Verify Account Information
        AccountInfoPagePO.VerifyAccountInfomation()

        // Click View Address Button
        AccountInfoPagePO.ClickViewAddressButton()

        // Add address
        AccountInfoPagePO.AddAddress(NewAddress.FirstName, NewAddress.LastName, NewAddress.Company, NewAddress.Address1, NewAddress.Address2, NewAddress.City, NewAddress.Country, NewAddress.ZIPCode, NewAddress.Phone)

        // Click Cancel button
        AccountInfoPagePO.ClickCancelButton()
    })

    it("A06- Edit a address", () => {
        const EditAddress = accountInfo["EditAddressInfo"]
        // Redriect to the Account page
        cy.visit("https://hatd-test.myshopify.com/account")

        // Verify Account Information
        AccountInfoPagePO.VerifyAccountInfomation()

        // Click View Address Button
        AccountInfoPagePO.ClickViewAddressButton()

        // Edit address
        AccountInfoPagePO.EditAddress(EditAddress.FirstName, EditAddress.LastName, EditAddress.Company, EditAddress.Address1, EditAddress.Address2, EditAddress.City, EditAddress.Country, EditAddress.ZIPCode, EditAddress.Phone)
        AccountInfoPagePO.ClickUpdateAddressButton()

        // Verify add address successfully
        cy.wait(500)
        AccountInfoPagePO.VerifyNewAddressInfo(EditAddress.FirstName, EditAddress.LastName)
    })

    it("A07- Set default in the edit screen", () => {
        const EditAddress = accountInfo["EditAddressInfo"]
        // Redriect to the Account page
        cy.visit("https://hatd-test.myshopify.com/account")

        // Verify Account Information
        AccountInfoPagePO.VerifyAccountInfomation()

        // Click View Address Button
        AccountInfoPagePO.ClickViewAddressButton()

        // Edit address
        AccountInfoPagePO.EditAddress(EditAddress.FirstName, EditAddress.LastName, EditAddress.Company, EditAddress.Address1, EditAddress.Address2, EditAddress.City, EditAddress.Country, EditAddress.ZIPCode, EditAddress.Phone)

        // Set default address
        AccountInfoPagePO.SetEditDefaultAddress()
        AccountInfoPagePO.ClickUpdateAddressButton()

        // Verify add address successfully
        cy.wait(500)
        AccountInfoPagePO.VerifyDefaultAddressInfo(EditAddress.FirstName, EditAddress.LastName)
    })

    it("A08- Cancel edit a address", () => {
        const EditAddress = accountInfo["NotExistAddress"]
        // Redriect to the Account page
        cy.visit("https://hatd-test.myshopify.com/account")

        // Verify Account Information
        AccountInfoPagePO.VerifyAccountInfomation()

        // Click View Address Button
        AccountInfoPagePO.ClickViewAddressButton()

        // Edit address
        AccountInfoPagePO.EditAddress(EditAddress.FirstName, EditAddress.LastName, EditAddress.Company, EditAddress.Address1, EditAddress.Address2, EditAddress.City, EditAddress.Country, EditAddress.ZIPCode, EditAddress.Phone)

        // Click Cancel Button
        AccountInfoPagePO.ClickCancelEditButton()
    })

})