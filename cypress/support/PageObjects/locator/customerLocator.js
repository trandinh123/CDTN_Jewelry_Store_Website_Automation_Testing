class CustomerLocators {
    Customer_Title= '//span[text()="Customers"]'

    // Create Customer Screen
    Add_Customer_Button= '//span[text()="Add customer"]/..'
    New_Customer_Title= '//span[text()="New customer"]'
    CustomerOverview_FirstName_Inp= '//input[@name="firstName"]'
    CustomerOverview_LastName_Inp= '//input[@name="lastName"]'
    CustomerOverview_Email_Inp= '//input[@name="email"]'
    CustomerOverview_PhoneNumber_Inp= '//input[@name="phone"]'
    Address_FirstName_Inp= '//input[@name="customer[firstName]"]'
    Address_LastName_Inp= '//input[@name="customer[lastName]"]'
    Address_Company_Inp= '//input[@name="customer[company]"]'
    Address_Address_Inp= '//input[@name="customer[address1]"]'
    Address_DetailAdd_Inp= '//input[@name="customer[address2]"]'
    Address_City_Inp= '//input[@name="customer[city]"]'
    Address_PostalCode_Inp= '//input[@name="customer[city]"]'
    Address_Phone_Inp= '//input[@name="customer[phone]"]'
    Save_Button= '//span[text()="Save"]/..'
    EmptyErrMsg= '//p[text()="Customer must have a name, phone number or email address"]'
    InvalidEmailMsg= '//p[text()="Email is invalid"]'
    ExistingEmailErrMsg= '//p[text()="Email has already been taken"]'
    InvalidPhoneMsg= '//p[text()="Enter a valid phone number"]'
    ExistingPhoneMsg= 'Phone has already been taken'

    // Edit Customer Screen
    Search_Button= '//button[@class="_SearchActivator_vygqy_11"]'
    Search_Input= '//input[@aria-label="Search"]'
    Management_Option= '//button[@id="customer-activator"]'
    Edit_Header= '//h1[@class="Polaris-Header-Title Polaris-Header-Title__TitleWithSubtitle"]'
    Edit_Button= '//span[text()="Edit contact information"]'

    // Delete Customer
    More_Action_Button= '//span[text()="More actions"]/..'
    Delete_Option= '//span[text()="Delete customer"]'
    CfDeleteMsg= '//p[contains(text(), "Are you sure you want to delete the customer ")]'
    Delete_Button= '//span[text()="Delete customer"]/..'
    NoResultFoundMsg= '//p[text()="No results found"]'
}

const customerLocator = new CustomerLocators()
export default customerLocator