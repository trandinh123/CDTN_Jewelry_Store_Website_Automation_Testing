class ProductLocators {
    Product_Title= '//h1[text()="Products"]'
    Product_List= '//div[@class="boost-sd-right boost-product-listing-column"]'
    Bracelet_Product= 'a[href="/products/chain-bracelet"]'
    Product_Img= '//div[@class="boost-sd__product-image"]'
    Product_Name= '//div[@class="boost-sd__product-title"]'
    Product_Sale_Price= '//span[@class="boost-sd__format-currency"]'
}

const productLocator = new ProductLocators()
export default productLocator