class AccountLocators {
    Customer_Title= '//h1[@class="customer__title"]'
    Log_out= '//a[@href="/account/logout"]'
    Account_Details_Title= '//h2[text()="Account details"]'
    Account_Details= '//h2[text()="Account details"]//../p'
    View_Addresses= '//h2[text()="Account details"]//../a[contains(text(), "View addresses")]'
    Order_History_Title= '//h2[text()="Order history"]'
    Address_Title= '//h1[text()="Addresses"]'
    Default_Address_Key= '//li[@data-address]/h2[text()="Default"]'
    Default_Address_Value= '//li[@data-address]/h2[text()="Default"]/../p'
    Add_Address_Button= '//button[contains(text(),"Add a new address")]'
    Edit_Address_Button= '//button[contains(text(),"Edit")]'
    Delete_Address_Button= '//button[contains(text(),"Delete")]'

    // Add address screen
    Add_Address_Header= '//h2[text()="Add a new address"]'
    Address_First_Name_Input= '//input[@id="AddressFirstNameNew"]'
    Address_Last_Name_Input= '//input[@id="AddressLastNameNew"]'
    Address_Company_Input= '//input[@id="AddressCompanyNew"]'
    Address_Address1_Input= '//input[@id="AddressAddress1New"]'
    Address_Address2_Input= '//input[@id="AddressAddress2New"]'
    Address_City_Input= '//input[@id="AddressCityNew"]'
    Address_Country_Selection= '//select[@id="AddressCountryNew"]'
    Address_ZIPCode_Input= '//input[@id="AddressZipNew"]'
    Address_Phone_Input= '//input[@id="AddressPhoneNew"]'
    Submit_Addess_Button= '//button[contains(text(),"Add address")]'
    Cancel_Button= '//button[contains(text(),"Cancel")]'
    Address_Set_Default_Address= '//input[@id="address_default_address_new"]'
    NewAddressInfo= '//p'
    DefaultAddressInfo= '//h2[text()="Default"]/../p'
    NotExistAddress= '//p[text()="A Nguyen Van"]'

    // Edit Screen
    Edit_Address_Header= '//h2[text()= "Edit address"]'
    EditAddress_First_Name_Input= '//h2[text()= "Edit address"]/../form/div/input[@name="address[first_name]"]'
    EditAddress_Last_Name_Input= '//h2[text()= "Edit address"]/../form/div/input[@name="address[last_name]"]'
    EditAddress_Company_Input= '//h2[text()= "Edit address"]/../form/div/input[@name="address[company]"]'
    EditAddress_Address1_Input= '//h2[text()= "Edit address"]/../form/div/input[@name="address[address1]"]'
    EditAddress_Address2_Input= '//h2[text()= "Edit address"]/../form/div/input[@name="address[address2]"]'
    EditAddress_City_Input= '//h2[text()= "Edit address"]/../form/div/input[@name="address[city]"]'
    EditAddress_ZIPCode_Input= '//h2[text()= "Edit address"]/../form/div/input[@name="address[zip]"]'
    EditAddress_Phone_Input= '//h2[text()= "Edit address"]/../form/div/input[@name="address[phone]"]'
    EditAddress_Country_Selection= '//h2[text()= "Edit address"]/../form/div/div/select[@name="address[country]"]'
    Update_Address_Button= '//button[contains(text(),"Update address")]'
    EditAddress_Set_Default_Address= '//h2[text()= "Edit address"]/../form/div/input[@name="address[default]"]'


}

const accountLocator = new AccountLocators()
export default accountLocator