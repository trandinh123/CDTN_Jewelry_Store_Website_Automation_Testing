import productLocator from "./locator/productLocators";
import productDetailLocator from "./locator/productDetailLocators"
import cartLocator from "./locator/cartLocators";

class addProductPage {
    ViewProductCataLog() {
        cy.xpath(productLocator.Product_Title).should("exist").should("be.visible")
        cy.xpath(productLocator.Product_List).should("exist").should("be.visible")
        cy.xpath(productLocator.Product_Img).should("exist").should("be.visible")
        cy.xpath(productLocator.Product_Name).should("exist").should("be.visible")
        cy.xpath(productLocator.Product_Sale_Price).should("exist").should("be.visible")

    }
    
    ViewProductDetail() {
        cy.xpath(productLocator.Product_Title).should("exist").should("be.visible")
        cy.xpath(productLocator.Product_List).should("exist").should("be.visible")
        cy.xpath(productLocator.Product_Name).eq(0).click()
        cy.xpath(productDetailLocator.ProductNameTitle).should("exist").should("be.visible")
        cy.xpath(productDetailLocator.ProductPrice).should("exist").should("be.visible")
        cy.xpath(productDetailLocator.ProductDescription).should("exist").should("be.visible")
        cy.xpath(productDetailLocator.ProductDiscountTime).should("exist").should("be.visible")
        cy.xpath(productDetailLocator.ProductImage).should("exist").should("be.visible")
        cy.xpath(productDetailLocator.ProductQuantityInput).should("exist").should("be.visible")
        cy.xpath(productDetailLocator.AddToCartButton).should("exist").should("be.visible")
    }

    AddProducttoCart(numberProduct) {
        cy.xpath(productDetailLocator.ProductQuantityInput).clear().type(numberProduct)
        cy.xpath(productDetailLocator.AddToCartButton).eq(0).click()
        cy.wait(500)
    }

    AddSuggestedProduct() {
        cy.xpath(productDetailLocator.AddToCartButton).eq(1).click()
    }

    ViewCartInformation() {
        cy.xpath(cartLocator.CartIcon).eq(1).click({force: true})
        cy.xpath(cartLocator.CartTitle).should("exist").should("be.visible")
        cy.xpath(cartLocator.ProductColumnName).should("exist").should("be.visible")
        cy.xpath(cartLocator.QuantityColumnName).should("exist").should("be.visible")
        cy.xpath(cartLocator.TotalColumnName).should("exist").should("be.visible")
        cy.xpath(cartLocator.ProductImg1).should("exist").should("be.visible")
        cy.xpath(cartLocator.ProductDetail1).should("exist").should("be.visible")
        cy.xpath(cartLocator.ProductQuantity1).should("exist").should("be.visible")
        cy.xpath(cartLocator.ProductTotalPrice).should("exist").should("be.visible")
        cy.xpath(cartLocator.SubTotal).should("exist").should("be.visible")
        cy.xpath(cartLocator.SubTotalValue).should("exist").should("be.visible")
        cy.scrollTo('0px', '500px')
        cy.xpath(cartLocator.CheckoutButton).should("exist").should("be.visible")
        cy.xpath(cartLocator.ContinueShoppingButton).should("exist").should("be.visible")
    }

    IncreaseQuantityByClickPlusBtn(times) {
        for(let i = 0; i < times; i ++){
            cy.xpath(cartLocator.PlusButton).click()
            cy.wait(5000)
        }
    }

    DecreaseQuantityByClickMinusBtn(times) {
        for(let i = 0; i < times; i ++){
            cy.xpath(cartLocator.MinusButton).click()
            cy.wait(5000)
        }
    }

    InputQuantityInCart(numberProduct) {
        cy.xpath(cartLocator.QuantityInput).clear().type(numberProduct).clickOutside();
    }

    DeleteProduct() {
        cy.xpath(cartLocator.DeleteButton).click()
    }

    ValidateErrMsg(message) {
        cy.xpath(cartLocator.ErrMsg).contains(message)
    }

    ValidateProductQuantity(producNumber) {
        cy.xpath(cartLocator.QuantityInput).contains(producNumber)
    }

    VerifyEmptyCart() {
        cy.xpath(cartLocator.CartIcon).eq(1).click({force: true})
        cy.xpath(cartLocator.EmptyCartMsg).should("exist").should("be.visible")
    }

    CheckNumberInQuantityInput(quantity) {
        cy.xpath(cartLocator.QuantityInput).should('have.attr', 'value', quantity)
    }
    
    ValidateOverQuantityMsg() {
        cy.xpath(cartLocator.ErrMsg).contains("You can't add more 7 Shakra Bracelet - Blue to the cart.")
    }

}

const productPagePO= new addProductPage()
export default productPagePO