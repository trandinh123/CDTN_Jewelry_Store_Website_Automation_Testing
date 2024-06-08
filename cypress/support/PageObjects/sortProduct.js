import sortProductLocator from "./locator/sortProductLocator"
import productLocator from "./locator/productLocators"

class sortProductPage {
    SortByTitleAscendingOpt() {
        cy.xpath(sortProductLocator.SortSelection).click()
        cy.xpath(sortProductLocator.SortByTitleAscendingOpt).click()
    }

    SortByTitleDescendingOpt() {
        cy.xpath(sortProductLocator.SortSelection).click()
        cy.xpath(sortProductLocator.SortByTitleDescendingOpt).click()
    }

    SortByPriceAscendingOpt() {
        cy.xpath(sortProductLocator.SortSelection).click()
        cy.xpath(sortProductLocator.SortByPriceAscendingOpt).click()
    }

    SortByPriceDescendingOpt() {
        cy.xpath(sortProductLocator.SortSelection).click()
        cy.xpath(sortProductLocator.SortByPriceDescendingOpt).click()
    }

    ValidateSortByTitleAscendingResult() {
        let arr1 = new Array()
        cy.xpath(productLocator.Product_Name)
            .each($el => arr1.push($el.text()))
            .then(() => {
                cy.log(arr1)
                cy.wrap(arr1).should('deep.equal', [...arr1].sort())
            })
    }

    ValidateSortByTitleDescendingResult() {
        let arr2 = new Array()
        cy.xpath(productLocator.Product_Name)
            .each($el => arr2.push($el.text()))
            .then(() => {
                cy.log(arr2)
                cy.wrap(arr2).should('deep.equal', [...arr2].sort().reverse())
            })
    }

    ValidateSortByPriceAscendingResult() {
        let arr3 = new Array()
        cy.xpath(productLocator.Product_Sale_Price)
            .each($el => {
                let text = $el.text()
                arr3.push(text.split(" ")[0])
            })
            .then(() => {
                cy.log(arr3)
                cy.wrap(arr3).should('deep.equal', [...arr3].sort())
            })
    }

    ValidateSortByPriceDescendingResult() {
        let arr4 = new Array()
        cy.xpath(productLocator.Product_Sale_Price)
            .each($el => {
                let text = $el.text()
                arr4.push(text.split(" ")[0])
            })
            .then(() => {
                cy.log(arr4)
                cy.wrap(arr4).should('deep.equal', [...arr4].sort().reverse())
            })
    }
}

const sortProductPagePO = new sortProductPage();

export default sortProductPagePO;