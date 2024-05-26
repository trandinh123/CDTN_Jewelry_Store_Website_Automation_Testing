import filterProductLocator from "./locator/filterProductLocator"
import productLocator from "./locator/productLocators"

class filterProductPage{
    FilterFroduct(minPrice, maxPrice) {
        cy.xpath(filterProductLocator.PriceRange).should("exist").should("be.visible")
        cy.xpath(filterProductLocator.MinPrice).eq(0).clear().type(minPrice, {force:true})
        cy.xpath(filterProductLocator.MaxPrice).eq(0).clear().type(maxPrice, {force:true})
        cy.xpath(filterProductLocator.MinPrice).eq(0).click()
    }

    ValidateFilterCondition(minPrice, maxPrice) {
        cy.xpath(filterCondition.FilterCondition).should('be.visible')
        const filterCondition = document.evaluate(filterProductLocator.FilterCondition, document, null, 9, null).singleNodeValue.innerText
        expect(filterCondition).to.contain(`${minPrice}₫ - ${maxPrice}₫`)
    }

    ValidateFilterSuccessfull(minPrice, maxPrice) {
        cy.xpath(productLocator.Product_Sale_Price)
        .each($el => {
            let text = $el.text().split(" ")[0]
            cy.wrap(Number(text)).should('be.gte', minPrice).and('be.lte', maxPrice)
            cy.wait(500)
        })
    }

    ChooseMinPriceBySlider() {
        cy.xpath('//div[@data-handle="0"]').eq(0).invoke('attr', 'aria-valuenow', 40)
    }

    VerifyMinPriceInputValue() {
        cy.xpath(filterProductLocator.MinPrice).eq(0).should('have.attr', 'value', '15')
    }

    VerifyMaxPriceInputValue() {
        cy.xpath(filterProductLocator.MaxPrice).eq(0).should('have.attr', 'value', '80')
    }
   
}

const filterProductPagePO = new filterProductPage();

export default filterProductPagePO;