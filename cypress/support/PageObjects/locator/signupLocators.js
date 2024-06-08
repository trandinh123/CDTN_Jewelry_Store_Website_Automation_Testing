class SignUpLocators {
    CreateAccBtn = '//a[@href="/account/register"]'
    CreateAccHeader = '//h1[contains(text(), "Create account")]'
    FirstNameInput = '//input[@id="RegisterForm-FirstName"]'
    LastNameInput = '//input[@id="RegisterForm-LastName"]'
    EmailSignInInput= '//input[@id="RegisterForm-email"]'
    PasswordSignInInput= '//input[@id="RegisterForm-password"]'
    CreateButton = '//button[contains(text(), "Create")]'
    InvalidEmailMsg ='//a[@href="#RegisterForm-email"]'
    InvalidPasswordMsg = '//a[@href="#RegisterForm-password"]'
    InvalidFirstNameMsg= '//a[@href="#RegisterForm-first_name"]'
    InvalidLastNameMsg= '//a[@href="#RegisterForm-last_name"]'
}

const signupPO = new SignUpLocators()
export default signupPO