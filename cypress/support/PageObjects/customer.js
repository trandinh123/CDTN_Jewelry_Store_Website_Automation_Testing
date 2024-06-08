import customerLocator from "./locator/customerLocator";

class CustomerPage {
    RedriectToCustomerScreen() {
        cy.xpath(customerLocator.Customer_Title).should("exist").should("be.visible")
        cy.xpath(customerLocator.Customer_Title).click()
    }
    VerifyCreateScreenDisplay() {
        this.RedriectToCustomerScreen()
        cy.xpath(customerLocator.Add_Customer_Button).click()
        cy.xpath(customerLocator.New_Customer_Title).should("exist").should("be.visible")
    }

    ValidateRequiredFieldsEmptyErrMsg() {
        cy.xpath(customerLocator.EmptyErrMsg).should("exist").should("be.visible")
    }

    ValidateInvalidEmailMsg() {
        cy.xpath(customerLocator.InvalidEmailMsg).should("exist").should("be.visible")
    }

    ValidateExistingEmail() {
        cy.xpath(customerLocator.ExistingEmailErrMsg).should("exist").should("be.visible")
    }

    ValidateInvalidPhoneMsg() {
        cy.xpath(customerLocator.InvalidPhoneMsg).should("exist").should("be.visible")
    }

    ValidateExistingPhoneMsg() {
        cy.xpath(customerLocator.ExistingPhoneMsg).should("exist").should("be.visible")
    }

    EnterCustomerOverviewInfo(firstName, lastName, email, phoneNumber) {
        cy.xpath(customerLocator.CustomerOverview_FirstName_Inp).type(firstName)
        cy.xpath(customerLocator.CustomerOverview_LastName_Inp).type(lastName)
        cy.xpath(customerLocator.CustomerOverview_Email_Inp).type(email)
        cy.xpath(customerLocator.CustomerOverview_LastName_Inp).type(phoneNumber)
    }

    EnterAddressDetailInfo(firstName, lastName, company, address, apartment, city, postalCode, phoneNumber) {
        cy.xpath(customerLocator.Address_FirstName_Inp).type(firstName)
        cy.xpath(customerLocator.Address_LastName_Inp).type(lastName)
        cy.xpath(customerLocator.Address_Company_Inp).type(company)
        cy.xpath(customerLocator.Address_Address_Inp).type(address)
        cy.xpath(customerLocator.Address_DetailAdd_Inp).type(apartment)
        cy.xpath(customerLocator.Address_City_Inp).type(city)
        cy.xpath(customerLocator.Address_PostalCode_Inp).type(postalCode)
        cy.xpath(customerLocator.Address_Phone_Inp).type(phoneNumber)
    }

    ClickSaveButton() {
        cy.xpath(customerLocator.Save_Button).click()
    }

    EnterInvalidEmail(invalidEmail) {
        cy.xpath(customerLocator.CustomerOverview_Email_Inp).clear().type(invalidEmail)
    }

    EnterInvalidPhoneNumber(invalidPhoneNumber) {
        cy.xpath(customerLocator.CustomerOverview_PhoneNumber_Inp).clear().type(invalidEmail)
    }

    SearchCustomer(fullName) {
        cy.xpath(customerLocator.Search_Button).click()
        cy.xpath(customerLocator.Search_Input).type({fullName}`{enter}`)
    }

    RedriectToEditScreen() {
        cy.xpath(customerLocator.Edit_Header).should("exist").should("be.visible")
        cy.xpath(customerLocator.Management_Option).click()
        cy.xpath(customerLocator.Edit_Button).click()
    }

    ValidateInfoSaveSuccessfully(firstName, lastName, email, phoneNumber) {
        this.RedriectToEditScreen()
        cy.wait(500)
        cy.xpath(customerLocator.CustomerOverview_FirstName_Inp).contains(firstName)
        cy.xpath(customerLocator.CustomerOverview_LastName_Inp).contains(lastName)
        cy.xpath(customerLocator.CustomerOverview_Email_Inp).contains(email)
        cy.xpath(customerLocator.CustomerOverview_PhoneNumber_Inp).contains(phoneNumber)
    }

    EditCustomerInfo(firstName, lastName, email, phoneNumber) {
        this.RedriectToEditScreen()
        cy.wait(500)
        cy.xpath(customerLocator.CustomerOverview_FirstName_Inp).clear().type(firstName)
        cy.xpath(customerLocator.CustomerOverview_LastName_Inp).clear().type(lastName)
        cy.xpath(customerLocator.CustomerOverview_LastName_Inp).clear().type(email)
        cy.xpath(customerLocator.CustomerOverview_PhoneNumber_Inp).clear().type(phoneNumber)
    }

    LeaveAllFieldsEmptyInEditScreen() {
        this.RedriectToEditScreen()
        cy.wait(500)
        cy.xpath(customerLocator.CustomerOverview_FirstName_Inp).clear()
        cy.xpath(customerLocator.CustomerOverview_LastName_Inp).clear()
        cy.xpath(customerLocator.CustomerOverview_LastName_Inp).clear()
        cy.xpath(customerLocator.CustomerOverview_PhoneNumber_Inp).clear()
    }

    DeleteCustomer() {
        cy.xpath(customerLocator.More_Action_Button).eq(3).click()
        cy.xpath(customerLocator.Delete_Option).click()
        cy.xpath(customerLocator.CfDeleteMsg).should("exist").should("be.visible")
        cy.xpath(customerLocator.Delete_Button).click()
    }

    ValidateNoResultSearchFound() {
        cy.xpath(customerLocator.NoResultFoundMsg).should("exist").should("be.visible")
    }


}

const customerPagePO = new CustomerPage()
export default customerPagePO