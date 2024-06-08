import commonLocator from "./locator/commonLocator";
class common{
    validateExistance(locator, option){
        switch (option) {
            case "Yes":
                cy.get(locator).should("exist").should("be.visible")
                break;
            case "No":
                cy.get(locator).should("not.exist")
                break;
            default:
                cy.log("Option not valid")
                break;
        }
    }

    
}

const commonPO = new common()
export default commonPO