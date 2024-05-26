class ProductDetailLocators {
    ProductNameTitle= '//h3[@data-pf-type="ProductTitle"]'
    ProductPrice= '//div[@data-pf-type="ProductPrice2Item"]'
    ProductDescription= '//div[@data-pf-type="ProductDescription"]'
    ProductDiscountTime= '//div[@data-pf-type="CountDown"]'
    ProductQuantityInput= '//input[@data-pf-type="QuantityField"]'
    AddToCartButton= '//button[text()="Add To Cart"]'
    ProductImage= '//div[@data-media-type="image"]/img'
}

const productDetailLocator = new ProductDetailLocators()
export default productDetailLocator