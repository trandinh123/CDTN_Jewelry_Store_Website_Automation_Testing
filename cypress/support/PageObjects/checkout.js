import checkoutLocator from "./locator/checkoutLocators";

class CheckoutPage {
    VerifyProductInfo() {
        cy.xpath(checkoutLocator.ProductImg).should("exist").should("be.visible")
        cy.xpath(checkoutLocator.ProductName).should("exist").should("be.visible")
        cy.xpath(checkoutLocator.ProductQuantity).should("exist").should("be.visible")
        cy.xpath(checkoutLocator.ProductCost).contains("215")
        cy.xpath(checkoutLocator.ShippingFee).contains("Free")
        cy.xpath(checkoutLocator.EstimatedTax).contains("22")
        cy.xpath(checkoutLocator.TotalCost).contains("237")
    }

    ClickCheckoutButton() {
        cy.xpath(checkoutLocator.CheckoutButton).click()
    }

    ChooseAdress() {
        cy.xpath(checkoutLocator.ShippingAddSelection).click()
        cy.xpath(checkoutLocator.ChooseAddressButton).click()
    }

    ClickPayNowButton() {
        cy.xpath(checkoutLocator.PayNowButton).click({force:true})
    }

    ValidateCardNumberErrMsg() {
        cy.xpath(checkoutLocator.cardNumberErrMsg).contains("Enter a card number")
    }

    ValidateInvalidCardNumberErrMsg() {
        cy.xpath(checkoutLocator.cardNumberErrMsg).contains("Enter a valid card number")
    }
    
    ValidateExpireDateErrMsg() {
        cy.xpath(checkoutLocator.expireDateErrMsg).contains("Enter a valid expiration date")
    }

    ValidateSecurityErrMsg() {
        cy.xpath(checkoutLocator.securityErrMsg).contains("Enter the CVV or security code on your card")
    }

    ValidateNameOnCardErrMsg() {
        cy.xpath(checkoutLocator.nameOnCardErrMsg).contains("Enter your name exactly as it’s written on your card")
    }

    EnterCardNumber(cardNumberValue) {
        cy.enter('[id^="card-fields-number"]').then((getBody) => {
            getBody().find("#number").type(cardNumberValue);
        });
    }

    EnterExpireDate(expireDateValue) {
        cy.enter('[id^="card-fields-expiry"]').then((getBody) => {
            getBody().find("#expiry").type(expireDateValue);
        });
    }

    EnterSecurityCode(securityCodeValue) {
        cy.enter('[id^="card-fields-verification_value"]').then((getBody) => {
            getBody().find("#verification_value").type(securityCodeValue);
        });
    }

    ClearNameOnCardValue() {
        cy.enter('[id^="card-fields-name"]').then((getBody) => {
            getBody().find("#name").clear()
        });
    }

    AddBillingAddressCheckbox() {
        cy.xpath(checkoutLocator.BillingAddCheckbox).click()
        cy.wait(500)
        cy.xpath(checkoutLocator.BillingAddTitle).should("exist").should("be.visible")
    }
    ClearLastNameValue() {
        cy.xpath(checkoutLocator.BillingLastNameInp).eq(0).clear()
    }

    ClearAddressValue() {
        cy.xpath(checkoutLocator.BillingAddInp).eq(0).clear()
    }

    ClearCityValue() {
        cy.xpath(checkoutLocator.BillingCityInp).eq(0).clear()
    }

    ClearPostalCodeValue() {
        cy.xpath(checkoutLocator.BillingPostalCodeInp).eq(0).clear()
    }

    EditBillingAddressValue(firstName, lastName, address, city, postalCode) {
        cy.xpath(checkoutLocator.BillingAddCheckbox).click()
        cy.wait(500)
        cy.xpath(checkoutLocator.BillingFirstNameInp).eq(0).clear().type(firstName)
        cy.xpath(checkoutLocator.BillingLastNameInp).eq(0).clear().type(lastName)
        cy.xpath(checkoutLocator.BillingAddInp).eq(0).clear().type(address)
        cy.xpath(checkoutLocator.BillingCityInp).eq(0).clear().type(city)
        cy.xpath(checkoutLocator.BillingPostalCodeInp).eq(0).clear().type(postalCode)
    }

    ChooseAddAddress() {
        cy.xpath(checkoutLocator.ShippingAddKey).click()
        cy.xpath(checkoutLocator.AddAddress).click()
    }

    AddAddress(firstName, lastName, address, apartment, city, postalCode) {
        cy.xpath(checkoutLocator.AddAddressTitle).should("exist").should("be.visible")
        cy.xpath(checkoutLocator.FirstNameInput).clear().type(firstName)
        cy.xpath(checkoutLocator.LastNameInput).clear().type(lastName)
        cy.xpath(checkoutLocator.AddressInput).clear().type(address)
        cy.xpath(checkoutLocator.ApartmentInput).type(apartment)
        cy.xpath(checkoutLocator.CityInput).clear().type(city)
        cy.xpath(checkoutLocator.PostalCodeInput).clear().type(postalCode)
    }

    LeaveLastNameFieldEmpty(firstName, address, apartment, city, postalCode) {
        cy.xpath(checkoutLocator.AddAddressTitle).should("exist").should("be.visible")
        cy.xpath(checkoutLocator.FirstNameInput).clear().type(firstName)
        cy.xpath(checkoutLocator.LastNameInput).clear()
        cy.xpath(checkoutLocator.AddressInput).clear().type(address)
        cy.xpath(checkoutLocator.ApartmentInput).clear().type(apartment)
        cy.xpath(checkoutLocator.CityInput).clear().type(city)
        cy.xpath(checkoutLocator.PostalCodeInput).clear().type(postalCode)
    }

    LeaveAddressFieldEmpty(firstName, lastName, apartment, city, postalCode) {
        cy.xpath(checkoutLocator.AddAddressTitle).should("exist").should("be.visible")
        cy.xpath(checkoutLocator.FirstNameInput).clear().type(firstName)
        cy.xpath(checkoutLocator.LastNameInput).clear().type(lastName)
        cy.xpath(checkoutLocator.ApartmentInput).type(apartment)
        cy.xpath(checkoutLocator.CityInput).type(city)
        cy.xpath(checkoutLocator.PostalCodeInput).type(postalCode)
    }

    LeaveCityFieldEmpty(firstName, lastName, address, apartment, postalCode) {
        cy.xpath(checkoutLocator.AddAddressTitle).should("exist").should("be.visible")
        cy.xpath(checkoutLocator.FirstNameInput).clear().type(firstName)
        cy.xpath(checkoutLocator.LastNameInput).clear().type(lastName)
        cy.xpath(checkoutLocator.AddressInput).type(address)
        cy.xpath(checkoutLocator.ApartmentInput).type(apartment)
        cy.xpath(checkoutLocator.PostalCodeInput).type(postalCode)
    }

    LeavePostalCodeFieldEmpty(firstName, lastName, address, apartment, city) {
        cy.xpath(checkoutLocator.AddAddressTitle).should("exist").should("be.visible")
        cy.xpath(checkoutLocator.FirstNameInput).clear().type(firstName)
        cy.xpath(checkoutLocator.LastNameInput).clear().type(lastName)
        cy.xpath(checkoutLocator.AddressInput).type(address)
        cy.xpath(checkoutLocator.ApartmentInput).type(apartment)
        cy.xpath(checkoutLocator.CityInput).type(city)
        cy.xpath(checkoutLocator.PostalCodeInput).clear()
    }

    ClickSaveNewAddressButton() {
        cy.xpath(checkoutLocator.SaveAddressButton).click()
    }

    ClickCancelAddAddressButton() {
        cy.xpath(checkoutLocator.CancelAddAddressButton).click()
    }

    ValidateLastNameEmptyErrMsg() {
        cy.xpath(checkoutLocator.LeaveLastNameEmptyErrMsg).should("exist").should("be.visible")
    }

    ValidateAddressEmptyErrMsg() {
        cy.xpath(checkoutLocator.LeaveAddressEmptyErrMsg).should("exist").should("be.visible")
    }

    ValidateCityEmptyErrMsg() {
        cy.xpath(checkoutLocator.LeaveCityEmptyErrMsg).should("exist").should("be.visible")
    }

    ValidatePostalCodeEmptyMsg() {
        cy.xpath(checkoutLocator.LeavePostalCodeEmptyErrMsg).should("exist").should("be.visible")
    }

    ValidateCreateOrderSuccessful() {
        cy.xpath(checkoutLocator.CreateOrderSuccessfulMsg).should("exist").should("be.visible")
    }

    ViewOrderHistory(orderID, orderDate, orderPaymentStatus, orderFullFillment, orderTotal) {
        cy.xpath(checkoutLocator.OrderHistoryTitle).should("exist").should("be.visible")
        cy.xpath(checkoutLocator.OrderIDColumn).should("exist").should("be.visible")
        cy.xpath(checkoutLocator.OrderDateColumn).should("exist").should("be.visible")
        cy.xpath(checkoutLocator.PaymentStatusColumn).should("exist").should("be.visible")
        cy.xpath(checkoutLocator.FullfillmentStatusColumn).should("exist").should("be.visible")
        cy.xpath(checkoutLocator.TotalColumn).should("exist").should("be.visible")

        cy.xpath(checkoutLocator.OrderIDValue).contains(orderID)
        cy.xpath(checkoutLocator.OrderDateValue).contains(orderDate)
        cy.xpath(checkoutLocator.OrderPaymentStatusValue).contains(orderPaymentStatus)
        cy.xpath(checkoutLocator.OrderFullfillmentStatusValue).contains(orderFullFillment)
        cy.xpath(checkoutLocator.OrderTotalValue).contains(orderTotal)
    }
}

const checkoutPagePO= new CheckoutPage()
export default checkoutPagePO

