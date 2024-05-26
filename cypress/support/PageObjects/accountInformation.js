import accountLocator from './locator/accountLocators';

class AccountInfoPage{
    VerifyAccountInfomation() {
        cy.xpath(accountLocator.Account_Details_Title).should("exist").should("be.visible")
        cy.xpath(accountLocator.Account_Details).should("exist").should("be.visible")
        cy.xpath(accountLocator.View_Addresses).should("exist").should("be.visible")
        cy.xpath(accountLocator.Order_History_Title).should("exist").should("be.visible")
    }

    ClickViewAddressButton() {
        cy.xpath(accountLocator.View_Addresses).click()
    }

    VerifyAddressInfo() {
        cy.xpath(accountLocator.Address_Title).should("exist").should("be.visible")
        cy.xpath(accountLocator.Default_Address_Key).should("exist").should("be.visible")
        cy.xpath(accountLocator.Default_Address_Value).should("exist").should("be.visible")
        cy.xpath(accountLocator.Add_Address_Button).should("exist").should("be.visible")
        cy.xpath(accountLocator.Edit_Address_Button).should("exist").should("be.visible")
        cy.xpath(accountLocator.Delete_Address_Button).should("exist").should("be.visible")
    }

    AddAddress(FirstName, LastName, Company, Address1, Address2, City, Country, ZIPCode, Phone) {
        cy.xpath(accountLocator.Add_Address_Button).click()
        cy.wait(500)
        cy.xpath(accountLocator.Add_Address_Header).should("exist").should("be.visible")
        cy.xpath(accountLocator.Address_First_Name_Input).type(FirstName)
        cy.xpath(accountLocator.Address_Last_Name_Input).type(LastName)
        cy.xpath(accountLocator.Address_Company_Input).type(Company)
        cy.xpath(accountLocator.Address_Address1_Input).type(Address1)
        cy.xpath(accountLocator.Address_Address2_Input).type(Address2)
        cy.xpath(accountLocator.Address_City_Input).type(City)
        cy.xpath(accountLocator.Address_Country_Selection).select(Country)
        cy.xpath(accountLocator.Address_ZIPCode_Input).type(ZIPCode)
        cy.xpath(accountLocator.Address_Phone_Input).type(Phone)
    }

    SetNewDefaultAddress() {
        cy.xpath(accountLocator.Address_Set_Default_Address).click()
    }

    ClickSaveNewAddress() {
        cy.xpath(accountLocator.Submit_Addess_Button).dblclick()
    }

    ClickCancelButton() {
        cy.xpath(accountLocator.Cancel_Button).eq(0).click()
    }

    ClickCancelEditButton() {
        cy.xpath(accountLocator.Cancel_Button).eq(1).click({force: true})
    }

    EditAddress(FirstName, LastName, Company, Address1, Address2, City, Country, ZIPCode, Phone) {
        cy.xpath(accountLocator.Edit_Address_Button).eq(1).click()
        cy.wait(500)
        cy.xpath(accountLocator.Edit_Address_Header).should("exist").should("be.visible")
        cy.xpath(accountLocator.EditAddress_First_Name_Input).eq(1).type(FirstName)
        cy.xpath(accountLocator.EditAddress_Last_Name_Input).eq(1).type(LastName)
        cy.xpath(accountLocator.EditAddress_Company_Input).eq(1).type(Company)
        cy.xpath(accountLocator.EditAddress_Address1_Input).eq(1).type(Address1)
        cy.xpath(accountLocator.EditAddress_Address2_Input).eq(1).type(Address2)
        cy.xpath(accountLocator.EditAddress_City_Input).eq(1).type(City)
        cy.xpath(accountLocator.EditAddress_Country_Selection).eq(1).select(Country)
        cy.xpath(accountLocator.EditAddress_ZIPCode_Input).eq(1).type(ZIPCode)
        cy.xpath(accountLocator.EditAddress_Phone_Input).eq(1).type(Phone)
    }

    SetEditDefaultAddress() {
        cy.xpath(accountLocator.EditAddress_Set_Default_Address).eq(1).click()
    }

    ClickUpdateAddressButton() {
        cy.xpath(accountLocator.Update_Address_Button).eq(1).click()
    }

    DeleteAddress() {
        cy.xpath(accountLocator.Delete_Address_Button).click()
        cy.on('window:confirm', (text) => {
            expect(text).to.contains('Are you sure you wish to delete this address?');
        });
    }

    VerifyNewAddressInfo(firstName, lastName) {
        cy.xpath(accountLocator.NewAddressInfo).contains(`${firstName} ${lastName}`)
    }

    VerifyDefaultAddressInfo(firstName, lastName) {
        cy.xpath(accountLocator.DefaultAddressInfo).contains(`${firstName} ${lastName}`)
    }

    VerifyNotExistAddress() {
        cy.xpath(accountLocator.NotExistAddress).should("be.null")
    }


}

const AccountInfoPagePO = new AccountInfoPage();

export default AccountInfoPagePO;