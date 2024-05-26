import checkoutPagePO from "../support/PageObjects/checkout";
import productPagePO from "../support/PageObjects/addProduct";
import credentials from "../fixtures/credentials.json"
import createOrder from "../fixtures/createOrder.json"
import loginPagePO from "../support/PageObjects/loginPage";

describe("Create Order", () => {
    beforeEach('Access to the site', () => {
        cy.visit('https://hatd-test.myshopify.com/account/login');
        // Login with valid email and password
        loginPagePO.login(credentials.email, credentials.password);

        // Redriect to Catalog Page
        cy.visit('https://hatd-test.myshopify.com/collections/all')
    })
    it("Add product to cart", () => {
        // Verify Product Detail 
        productPagePO.ViewProductDetail()

        // Add Product to Cart
        productPagePO.AddProducttoCart(5)

    })
    it("CO01- Leave the card number field empty", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        //checkoutPagePO.ChooseAdress()

        // Click PayNow Button
        cy.wait(500)
        checkoutPagePO.ClickPayNowButton()

        // Validate Card Number Error Msg
        checkoutPagePO.ValidateCardNumberErrMsg()
    })

    it("CO02- Enter invalid card number", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        //checkoutPagePO.ChooseAdress()

        // Enter Invalid Card Number Value
        cy.scrollTo(0, 500)
        cy.wait(500)
        checkoutPagePO.ClickPayNowButton()
        cy.wait(500)
        checkoutPagePO.EnterCardNumber(createOrder.Invalid_Value.invalidCardNumber)

        // Click PayNow Button
        cy.wait(500)
        checkoutPagePO.ClickPayNowButton()

        // Validate Card Number Error Msg
        checkoutPagePO.ValidateCardNumberErrMsg()
    })

    it("CO03- Enter invalid card number - including letter characters", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        //checkoutPagePO.ChooseAdress()

        // Enter Invalid Card Number Value
        cy.wait(5000)
        checkoutPagePO.EnterCardNumber(createOrder.Invalid_Value.letterCharacters)

        // Click PayNow Button
        cy.wait(500)
        checkoutPagePO.ClickPayNowButton()

        // Validate Card Number Error Msg
        checkoutPagePO.ValidateCardNumberErrMsg()
    })

    it("CO04- Enter invalid card number - including special characters", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        //checkoutPagePO.ChooseAdress()

        // Enter Invalid Card Number Value
        cy.wait(500)
        checkoutPagePO.EnterCardNumber(createOrder.Invalid_Value.specialCharacters)

        // Click PayNow Button
        cy.wait(500)
        checkoutPagePO.ClickPayNowButton()

        // Validate Card Number Error Msg
        checkoutPagePO.ValidateCardNumberErrMsg()
    })

    it("CO05- Enter invalid card number - mixing letter and special characters", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        //checkoutPagePO.ChooseAdress()

        // Enter Invalid Card Number Value
        cy.wait(500)
        checkoutPagePO.EnterCardNumber(createOrder.Invalid_Value.mixingSpecialAndLetterCharacters)

        // Click PayNow Button
        cy.wait(500)
        checkoutPagePO.ClickPayNowButton()

        // Validate Card Number Error Msg
        checkoutPagePO.ValidateCardNumberErrMsg()
    })

    it("CO06- Leave the expire date field empty", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        //checkoutPagePO.ChooseAdress()

        // Enter Card Number Value
        checkoutPagePO.EnterCardNumber(createOrder.CreditCardInfo.cardNumber)

        // Click PayNow Button
        checkoutPagePO.ClickPayNowButton()

        // Validate Expire Date Error Msg
        checkoutPagePO.ValidateExpireDateErrMsg()
    })

    it("CO07- Enter invalid expire date", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        //checkoutPagePO.ChooseAdress()

        // Enter Card Number Value
        checkoutPagePO.EnterCardNumber(createOrder.CreditCardInfo.cardNumber)

        // Enter invalid expire date
        checkoutPagePO.EnterExpireDate(createOrder.Invalid_Value.invalidExpireDate)

        // Click PayNow Button
        checkoutPagePO.ClickPayNowButton()

        // Validate Expire Date Error Msg
        checkoutPagePO.ValidateExpireDateErrMsg()
    })

    it("CO08- Enter invalid expire date - including letter characters", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        //checkoutPagePO.ChooseAdress()

        // Enter Card Number Value
        checkoutPagePO.EnterCardNumber(createOrder.CreditCardInfo.cardNumber)

        // Enter invalid expire date
        checkoutPagePO.EnterExpireDate(createOrder.Invalid_Value.letterCharacters)

        // Click PayNow Button
        checkoutPagePO.ClickPayNowButton()

        // Validate Expire Date Error Msg
        checkoutPagePO.ValidateExpireDateErrMsg()
    })

    it("CO09- Enter invalid expire date - including special characters", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        //checkoutPagePO.ChooseAdress()

        // Enter Card Number Value
        checkoutPagePO.EnterCardNumber(createOrder.CreditCardInfo.cardNumber)

        // Enter invalid expire date
        checkoutPagePO.EnterExpireDate(createOrder.Invalid_Value.specialCharacters)

        // Click PayNow Button
        checkoutPagePO.ClickPayNowButton()

        // Validate Expire Date Error Msg
        checkoutPagePO.ValidateExpireDateErrMsg()
    })

    it("CO10- Enter invalid expire date - mixing letter and special characters", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        //checkoutPagePO.ChooseAdress()

        // Enter Card Number Value
        checkoutPagePO.EnterCardNumber(createOrder.CreditCardInfo.cardNumber)

        // Enter invalid expire date
        checkoutPagePO.EnterExpireDate(createOrder.Invalid_Value.mixingSpecialAndLetterCharacters)

        // Click PayNow Button
        checkoutPagePO.ClickPayNowButton()

        // Validate Expire Date Error Msg
        checkoutPagePO.ValidateExpireDateErrMsg()
    })

    it("CO11 - Leave the security code empty", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        // checkoutPagePO.ChooseAdress()

        // Enter Card Number Value
        checkoutPagePO.EnterCardNumber(createOrder.CreditCardInfo.cardNumber)

        // Enter Expire Date
        checkoutPagePO.EnterExpireDate(createOrder.CreditCardInfo.expireDate)

        // Click PayNow Button
        checkoutPagePO.ClickPayNowButton()

        // Validate Security Code Error Msg
        checkoutPagePO.ValidateSecurityErrMsg()
    })

    it("CO12 - Enter invalid security code", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        // checkoutPagePO.ChooseAdress()

        // Enter Card Number Value
        checkoutPagePO.EnterCardNumber(createOrder.CreditCardInfo.cardNumber)

        // Enter Expire Date
        checkoutPagePO.EnterExpireDate(createOrder.CreditCardInfo.expireDate)

        // Enter Invalid Security Code
        checkoutPagePO.EnterSecurityCode(createOrder.Invalid_Value.invalidSecurityCode)

        // Click PayNow Button
        checkoutPagePO.ClickPayNowButton()

        // Validate Security Code Error Msg
        checkoutPagePO.ValidateSecurityErrMsg()
    })

    it("CO13 - Enter invalid security code - including special characters", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        // checkoutPagePO.ChooseAdress()

        // Enter Card Number Value
        checkoutPagePO.EnterCardNumber(createOrder.CreditCardInfo.cardNumber)

        // Enter Expire Date
        checkoutPagePO.EnterExpireDate(createOrder.CreditCardInfo.expireDate)

        // Enter Invalid Security Code
        checkoutPagePO.EnterSecurityCode(createOrder.Invalid_Value.specialCharacters)

        // Click PayNow Button
        checkoutPagePO.ClickPayNowButton()

        // Validate Security Code Error Msg
        checkoutPagePO.ValidateSecurityErrMsg()
    })

    it("CO14 - Enter invalid security code - including letter characters", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        //checkoutPagePO.ChooseAdress()

        // Enter Card Number Value
        checkoutPagePO.EnterCardNumber(createOrder.CreditCardInfo.cardNumber)

        // Enter Expire Date
        checkoutPagePO.EnterExpireDate(createOrder.CreditCardInfo.expireDate)

        // Enter Invalid Security Code
        checkoutPagePO.EnterSecurityCode(createOrder.Invalid_Value.letterCharacters)

        // Click PayNow Button
        checkoutPagePO.ClickPayNowButton()

        // Validate Security Code Error Msg
        checkoutPagePO.ValidateSecurityErrMsg()
    })

    it("CO15 - Enter invalid security code - mixing special and letter characters", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        //  checkoutPagePO.ChooseAdress()

        // Enter Card Number Value
        checkoutPagePO.EnterCardNumber(createOrder.CreditCardInfo.cardNumber)

        // Enter Expire Date
        checkoutPagePO.EnterExpireDate(createOrder.CreditCardInfo.expireDate)

        // Enter Invalid Security Code
        checkoutPagePO.EnterSecurityCode(createOrder.Invalid_Value.mixingSpecialAndLetterCharacters)

        // Click PayNow Button
        checkoutPagePO.ClickPayNowButton()

        // Validate Security Code Error Msg
        checkoutPagePO.ValidateSecurityErrMsg()
    })

    it("CO16 - Leave the Name on Card field empty", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        //checkoutPagePO.ChooseAdress()
        cy.wait(500)
        // Enter Card Number Value
        checkoutPagePO.EnterCardNumber(createOrder.CreditCardInfo.cardNumber)

        // Enter Expire Date
        checkoutPagePO.EnterExpireDate(createOrder.CreditCardInfo.expireDate)

        // Enter Invalid Security Code
        checkoutPagePO.EnterSecurityCode(createOrder.CreditCardInfo.cardNumbersecurityCode)

        // Leave the Name on Card field empty
        checkoutPagePO.ClearNameOnCardValue()
        

        // Click PayNow Button
        checkoutPagePO.ClickPayNowButton()

        // Validate Name on Card Error Msg
        checkoutPagePO.ValidateNameOnCardErrMsg()
    })

    it("CO17 - Leave the Last Name field empty", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        //checkoutPagePO.ChooseAdress()

        // Enter Card Number Value
        checkoutPagePO.EnterCardNumber(createOrder.CreditCardInfo.cardNumber)

        // Enter Expire Date
        checkoutPagePO.EnterExpireDate(createOrder.CreditCardInfo.expireDate)

        // Enter Invalid Security Code
        checkoutPagePO.EnterSecurityCode(createOrder.CreditCardInfo.cardNumbersecurityCode)

        // Click add address billing checkbox
        checkoutPagePO.AddBillingAddressCheckbox()

        // Leave the Last Name field empty
        checkoutPagePO.ClearLastNameValue()

        // Click PayNow Button
        checkoutPagePO.ClickPayNowButton()

        // Validate Name on Card Error Msg
        checkoutPagePO.ValidateLastNameEmptyErrMsg()
    })

    it("CO18 - Leave the Address Value field empty", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Enter Card Number Value
        checkoutPagePO.EnterCardNumber(createOrder.CreditCardInfo.cardNumber)

        // Enter Expire Date
        checkoutPagePO.EnterExpireDate(createOrder.CreditCardInfo.expireDate)

        // Enter Invalid Security Code
        checkoutPagePO.EnterSecurityCode(createOrder.CreditCardInfo.cardNumbersecurityCode)

        // Click add address billing checkbox
       // checkoutPagePO.AddBillingAddressCheckbox()

        // Leave the Last Name field empty
        checkoutPagePO.ClearAddressValue()

        // Click PayNow Button
        checkoutPagePO.ClickPayNowButton()

        // Validate Name on Card Error Msg
        checkoutPagePO.ValidateAddressEmptyErrMsg()
    })

    it("CO19 - Leave the City field empty", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Choose Address
        // checkoutPagePO.ChooseAdress()

        // Enter Card Number Value
        checkoutPagePO.EnterCardNumber(createOrder.CreditCardInfo.cardNumber)

        // Enter Expire Date
        checkoutPagePO.EnterExpireDate(createOrder.CreditCardInfo.expireDate)

        // Enter Invalid Security Code
        checkoutPagePO.EnterSecurityCode(createOrder.CreditCardInfo.cardNumbersecurityCode)

        // Click add address billing checkbox
        //checkoutPagePO.AddBillingAddressCheckbox()

        // Leave the Last Name field empty
        checkoutPagePO.ClearCityValue()

        // Click PayNow Button
        checkoutPagePO.ClickPayNowButton()

        // Validate Name on Card Error Msg
        checkoutPagePO.ValidateCityEmptyErrMsg()
    })

    it("CO20 - Add a different shipping address", () => {
        const ShippingAddress = createOrder["ShippingAddress"]
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Add a different address
        checkoutPagePO.ChooseAddAddress()
        checkoutPagePO.AddAddress(ShippingAddress.FirstName, ShippingAddress.LastName, ShippingAddress.Address, ShippingAddress.Apartment, ShippingAddress.City, ShippingAddress.PostalCode)
        checkoutPagePO.ClickSaveNewAddressButton()

        // Verify add address successfully

    })
    it("CO21 - Add a different shipping address - Leave Last Name field Empty", () => {
        const ShippingAddress = createOrder["ShippingAddress"]
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Add a different address
        checkoutPagePO.ChooseAddAddress()

        // Leave Last Name field Empty
        checkoutPagePO.LeaveLastNameFieldEmpty(ShippingAddress.FirstName, ShippingAddress.Address, ShippingAddress.Apartment, ShippingAddress.City, ShippingAddress.PostalCode)
        checkoutPagePO.ClickSaveNewAddressButton()

        // Verify error message 
        checkoutPagePO.ValidateLastNameEmptyErrMsg()
    })
    it("CO22 - Add a different shipping address - Leave Address field Empty", () => {
        const ShippingAddress = createOrder["ShippingAddress"]
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Add a different address
        checkoutPagePO.ChooseAddAddress()

        // Leave Address field empty
        checkoutPagePO.LeaveAddressFieldEmpty(ShippingAddress.FirstName, ShippingAddress.LastName, ShippingAddress.Apartment, ShippingAddress.City, ShippingAddress.PostalCode)
        checkoutPagePO.ClickSaveNewAddressButton()
        // Verify error message 
        checkoutPagePO.ValidateAddressEmptyErrMsg()
    })
    it("CO23 - Add a different shipping address - Leave City field Empty", () => {
        const ShippingAddress = createOrder["ShippingAddress"]
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Verify product info before checkout
        checkoutPagePO.VerifyProductInfo()

        // Add a different address
        checkoutPagePO.ChooseAddAddress()

        // Leave City field empty
        checkoutPagePO.LeaveCityFieldEmpty(ShippingAddress.FirstName, ShippingAddress.LastName, ShippingAddress.Address, ShippingAddress.Apartment, ShippingAddress.PostalCode)
        checkoutPagePO.ClickSaveNewAddressButton()
        // Verify error message 
        checkoutPagePO.ValidateCityEmptyErrMsg()
    })
    it("CO24 - Create Order Successfully with default billing address value", () => {
        // Redriect to Cart page to view infomation
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Enter Card Number Value
        cy.wait(500)
        cy.reload()
        checkoutPagePO.EnterCardNumber(createOrder.CreditCardInfo.cardNumber)

        // Enter Expire Date
        checkoutPagePO.EnterExpireDate(createOrder.CreditCardInfo.expireDate)

        // Enter Invalid Security Code
        checkoutPagePO.EnterSecurityCode(createOrder.CreditCardInfo.cardNumbersecurityCode)

        // Validate default value
        checkoutPagePO.ClickPayNowButton()
        cy.wait(500)
        checkoutPagePO.ValidateCreateOrderSuccessful()

    })

    it("CO25 - Create Order Successfully with edited billing address value", () => {
        // Verify Product Detail 
        productPagePO.ViewProductDetail()

        // Add Product to Cart
        productPagePO.AddProducttoCart(5)

        const billingAddress = createOrder["BillingAddress"]
         // Redriect to Cart page to view infomation
        cy.wait(500)
        productPagePO.ViewCartInformation()

        // Checkout
        checkoutPagePO.ClickCheckoutButton()

        // Enter Card Number Value
        cy.wait(500)
        checkoutPagePO.EnterCardNumber(1)

        // Enter Expire Date
        checkoutPagePO.EnterExpireDate("02/25")

        // Enter Invalid Security Code
        checkoutPagePO.EnterSecurityCode("111")
        // Edit Billing Address
        checkoutPagePO.EditBillingAddressValue(billingAddress.FirstName, billingAddress.LastName, billingAddress.Address, billingAddress.City, billingAddress.PostalCode)

        // Validate default value
        cy.wait(1000)
        checkoutPagePO.ClickPayNowButton()
        
        checkoutPagePO.ValidateCreateOrderSuccessful()
    })


    it('CO26 - View Order Information', () => {
        const orderInfo = createOrder["OrderInfo"]

        // Redriect to the Account page
        cy.visit("https://hatd-test.myshopify.com/account")

        // View Order History
        checkoutPagePO.ViewOrderHistory(orderInfo.OrderID, orderInfo.OrderDate, orderInfo.OrderPaymentStatus, orderInfo.OrderFullfillmentStatus, orderInfo.OrderTotal)

    })

})