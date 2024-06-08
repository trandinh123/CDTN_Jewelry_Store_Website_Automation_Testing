class CartLocators {
    CartIcon= '//a[@href="/cart"]'
    EmptyCartMsg= '//h1[text()="Your cart is empty"]'
    CartTitle= '//h1[text()="Your cart"]'
    ProductColumnName= '//table[@class="cart-items"]/thead/tr/th[contains(text()," Product")]'
    QuantityColumnName= '//table[@class="cart-items"]/thead/tr/th[contains(text(),"Quantity")]'
    TotalColumnName= '//table[@class="cart-items"]/thead/tr/th[contains(text(),"Total")]'
    ProductImg1= '//table[@class="cart-items"]/tbody/tr[1]/td[@class="cart-item__media"]'
    ProductDetail1= '//table[@class="cart-items"]/tbody/tr[1]/td[@class="cart-item__details"]'
    ProductQuantity1= '//table[@class="cart-items"]/tbody/tr[1]/td[@class="cart-item__quantity"]'
    ProductTotalPrice= '//table[@class="cart-items"]/tbody/tr[1]/td/div[@class="cart-item__price-wrapper"]'
    SubTotal= '//h2[@class="totals__subtotal"]'
    SubTotalValue= '//p[@class="totals__subtotal-value"]'
    ContinueShoppingButton= '//a[@href="/collections/all"]'
    CheckoutButton= '//button[@id="checkout"]'
    PlusButton= '//button[@name="plus"]'
    MinusButton= '//button[@name="minus"]'
    QuantityInput= '//input[@class="quantity__input"]'
    DeleteButton= '//cart-remove-button[@id="Remove-1"]'
    ErrMsg= '//div[@class="cart-item__error"]/small'
    OverQuantityErrMsg= "//small[text()='You can't add more 7 Shakra Bracelet - Blue to the cart.']"
}

const cartLocator = new CartLocators()
export default cartLocator