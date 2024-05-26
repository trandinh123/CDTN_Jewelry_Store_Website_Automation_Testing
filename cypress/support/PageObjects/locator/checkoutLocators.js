class CheckoutLocators {
   CheckoutButton= '//button[@id="checkout"]'
   ShippingAddSelection= '//span[text()="Ship to"]'
   ChooseAddressButton= '//p[text()="Anh Nguyen, 67, 192 Kim Giang"]/../../../../../../../../../div/input'
   ContactAccKey= '//button[@id="contact-collapsible"]/div/span/span[text()="Account"]'
   ContactAccValue= '//button[@id="contact-collapsible"]/../../div'
   ShippingAddKey= '//span[text()="Ship to"]/../../..'
   ShippingAddValue= '//div[@id="shippingAddress"]'
   AddAddress= '//span[text()="Use a different address"]/../../../..'
   ShippingMethodKey= '//span[text()="Shipping method"]'
   ShippingMethodValue= '//fieldset[@id="shipping_methods"]'
   EmailOpt= 'input[@id="marketing_opt_in"]'
   PaymentTitle= '//h2[text()="Payment"]'
   PaymentMethod= '//span[text()="Credit card"]'
   CardNumberInput= '//input[@id="number"]'
   ExpireDateInput= '//input[@id="expiry"]'
   SecurityCodeInput= '//input[@id="verification_value"]'
   NameOnCard= '//div[@id="name"]/iframe'
   BillingAddCheckbox= '//input[@id="billingAddress"]'
   BillingAddTitle= '//h3[text()="Billing address"]'
   BillingNewAddSelection= '//select[@id="Select3"]'
   BillingCountrySelection= '//select[@name="countryCode"]'
   BillingFirstNameInp= '//input[@name="firstName"][1]'
   BillingLastNameInp= '//input[@name="lastName"]'
   BillingAddInp= '//input[@name="address1"][1]'
   AddApartmentButton= '//span[text()="Add apartment, suite, etc."]'
   BillingCityInp= '//input[@name="city"]'
   BillingPostalCodeInp= '//input[@name="postalCode"]'
   PayNowButton= '//button/span/span[text()= "Pay now"]'

   // Add new address
   AddAddressTitle= '//h2[text()="Add address"]'
   FirstNameInput= '//input[@id="TextField0"]'
   LastNameInput= '//input[@id="TextField1"]'
   AddressInput= '//input[@id="TextField2"]'
   ApartmentInput= '//input[@id="TextField3"]'
   CityInput= '//input[@id="TextField4"]'
   PostalCodeInput= '//input[@id="TextField5"]'
   CancelAddAddressButton= '//span[text()="Cancel"]/..'
   SaveAddressButton= '//span[text()="Save"]/../../..'
   LeaveLastNameEmptyErrMsg= '//p[text()="Enter a last name"]'
   LeaveAddressEmptyErrMsg= '//p[text()="Enter an address"]'
   LeaveCityEmptyErrMsg= '//p[text()="Enter a city"]'
   LeavePostalCodeEmptyErrMsg= '//p[text()="Enter a ZIP / postal code"]'
   CreateOrderSuccessfulMsg= '//h2[text()="Your order is confirmed"]'
   
   // Product Info
   ProductImg= '//picture/img'
   ProductName= '//p[text()="7 Shakra Bracelet"]'
   ProductQuantity= '//picture/../../div/div/div[text()="5"]'
   ProductCost= '//span[text()="Subtotal"]/../../div[2]/span'
   ShippingFee= '//span[text()="Shipping"]/../../../../../div[2]/span'
   EstimatedTax= '//span[text()="Estimated taxes"]/../../../../div[2]/div/div/span'
   TotalCost= '//span[text()="Total"]/../../div[2]/div/div/strong'
   
   // Error Message
   cardNumberErrMsg= '//p[@id="error-for-number"]'
   expireDateErrMsg= '//p[@id="error-for-expiry"]'
   securityErrMsg= '//p[@id="error-for-verification_value"]'
   nameOnCardErrMsg= '//p[@id="error-for-name"]'

   // Order history
   OrderHistoryTitle= '//h2[text()="Order history"]'
   OrderIDColumn= '//th[@id="ColumnOrder"]'
   OrderDateColumn= '//th[@id="ColumnDate"]'
   PaymentStatusColumn= '//th[@id="ColumnPayment"]'
   FullfillmentStatusColumn= '//th[@id="ColumnFulfillment"]'
   TotalColumn= '//th[@id="ColumnTotal"]'
   OrderIDValue= '//td[@data-label="Order"]/a'
   OrderDateValue= '//td[@data-label="Date"]/time'
   OrderPaymentStatusValue= '//td[@data-label="Payment status"]'
   OrderFullfillmentStatusValue= '//td[@data-label="Fulfillment status"]'
   OrderTotalValue= '//td[@data-label="Total"]'
}

const checkoutLocator = new CheckoutLocators()
export default checkoutLocator