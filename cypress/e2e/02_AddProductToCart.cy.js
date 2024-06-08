import loginPagePO from "../support/PageObjects/loginPage.js"
import credentials from "../fixtures/credentials.json"
import productPagePO from "../support/PageObjects/addProduct.js"
import cartLocator from "../support/PageObjects/locator/cartLocators.js"
import cart from "../fixtures/cart.json"

describe('Add Product To Cart', () => {
    beforeEach('Access to the site', () => {
        cy.visit('https://hatd-test.myshopify.com/account/login');
        // Login with valid email and password
        loginPagePO.login(credentials.email, credentials.password);
        // Redriect to Catalog Page
        cy.visit('https://hatd-test.myshopify.com/collections/all')
    })

    it('A01- View Product List at Catalog', () => {
        // View Product List at Catalog Page
        productPagePO.ViewProductCataLog()
    })

    it('A02- View Product Detail', () => {
        // View Product List at Catalog Page
        productPagePO.ViewProductDetail()
    })

    it('A03- Add Product with quantity equal as 0', () => {
        // Verify Product Detail 
        productPagePO.ViewProductDetail()

        // Add Product to Cart
        productPagePO.AddProducttoCart(0)

        // Verify add product to cart unsuccessfully
        productPagePO.VerifyEmptyCart()
    })

    it('A04- Add Product with quantity less than 0', () => {
        // Verify Product Detail 
        productPagePO.ViewProductDetail()

        // Add Product to Cart
        productPagePO.AddProducttoCart(-1)

        // Verify add product to cart unsuccessfully
        productPagePO.VerifyEmptyCart()
    })

    it('A05- Add product with quantity greater than product quantity in stock', () => {
        // Verify Product Detail 
        productPagePO.ViewProductDetail()

        // Add Product to Cart
        productPagePO.AddProducttoCart(11)

        // Verify add product to cart unsuccessfully
        productPagePO.VerifyEmptyCart()
    })

    it('A06- Add Product to Cart', () => {

        // Verify Product Detail 
        productPagePO.ViewProductDetail()

        // Add Product to Cart
        productPagePO.AddProducttoCart(1)
        cy.wait(5000)

        // Verify Add successfully
        productPagePO.ViewCartInformation()

    })

    it('A07- Increase quantity in the cart by clicking plus button', () => {
        // Verify Product Detail 
        productPagePO.ViewProductDetail()

        // View Cart Information
        productPagePO.ViewCartInformation()

        // Increate product quantity by clicking plus button
        productPagePO.IncreaseQuantityByClickPlusBtn(3)


        // Verify increase successfully
        productPagePO.CheckNumberInQuantityInput(4)
    })

    it('A08- Increase with quantity greater than product quantity in stock by clicking plus button', () => {
        // Verify Product Detail 
        productPagePO.ViewProductDetail()

        // View Cart Information
        productPagePO.ViewCartInformation()

        // Increate product quantity by clicking plus button
        productPagePO.IncreaseQuantityByClickPlusBtn(7)

        // Verify inscrease unsuccessfully
        productPagePO.ValidateOverQuantityMsg()
        productPagePO.CheckNumberInQuantityInput(10)

    })

    it('A09- Decrease quantity in the cart by clicking minus button', () => {
        // Verify Product Detail 
        productPagePO.ViewProductDetail()

        // View Cart Information
        productPagePO.ViewCartInformation()

        // Decrease product quantity by clicking minus button
        productPagePO.DecreaseQuantityByClickMinusBtn(3)

        // Verify decrease successfully
        productPagePO.CheckNumberInQuantityInput(7)
    })

    it('A10- Decrease quantity less than 1 in the cart by clicking minus button', () => {
        // Verify Product Detail 
        productPagePO.ViewProductDetail()

        // View Cart Information
        productPagePO.ViewCartInformation()

        // Decrease product quantity by clicking minus button
        productPagePO.DecreaseQuantityByClickMinusBtn(10)

        // Verify decrease unsuccessfully
        cy.xpath(cartLocator.MinusButton).should('have.class', 'disabled')
    })

    it('A11 - Increase quantity in the cart using input quantity', () => {
        // Verify Product Detail 
        productPagePO.ViewProductDetail()

        // View Cart Information
        productPagePO.ViewCartInformation()

        // Increase quantity in the cart using input quantity
        productPagePO.InputQuantityInCart(3)

        // Verify increase successfull
        productPagePO.CheckNumberInQuantityInput(3)
    })

    it('A12 - Increase quantity greater than product quantity in stock using input quantity', () => {
        // Verify Product Detail 
        productPagePO.ViewProductDetail()

        // View Cart Information
        productPagePO.ViewCartInformation()

        // Increase quantity in the cart using input quantity
        productPagePO.InputQuantityInCart(11)

        // Verify increase successfull
        productPagePO.ValidateOverQuantityMsg()
        productPagePO.CheckNumberInQuantityInput(3)
    })

    it('A13 - Decrease quantity in the cart using input quantity', () => {
        // Verify Product Detail 
        productPagePO.ViewProductDetail()

        // View Cart Information
        productPagePO.ViewCartInformation()

        // Decrease quantity in the cart using input quantity
        productPagePO.InputQuantityInCart(5)

        // Verify decrease successfull
        productPagePO.CheckNumberInQuantityInput(5)
    })

    it('A14 - Decrease quantity less than 0 using input quantity', () => {
        const errMessage = cart["errMsg"]
        // Verify Product Detail 
        productPagePO.ViewProductDetail()

        // View Cart Information
        productPagePO.ViewCartInformation()

        // Decrease quantity in the cart using input quantity
        productPagePO.InputQuantityInCart(-1)

        // Verify decrease unsuccessfull
        cy.wait(5000)
        productPagePO.ValidateErrMsg(errMessage.lessThan1ErrMsg)

    })

    it('A15 - Decrease quantity equal as 0 using input quantity', () => {
        // Verify Product Detail 
        productPagePO.ViewProductDetail()
        // View Cart Information
        productPagePO.ViewCartInformation()

        // Decrease quantity in the cart using input quantity
        productPagePO.InputQuantityInCart(0)

        // Verify decrease unsuccessfull
        cy.xpath(cartLocator.EmptyCartMsg).should("exist").should("be.visible")
    })



    it('A16 - Delete product from the cart', () => {
        // Verify Product Detail 
        productPagePO.ViewProductDetail()

        // Add Product to Cart
        productPagePO.AddSuggestedProduct()
        cy.wait(500)

        // View Cart Information
        productPagePO.ViewCartInformation()

        // Delete product
        productPagePO.DeleteProduct()

        // Verify delete successfully
        productPagePO.VerifyEmptyCart()
    })







})
