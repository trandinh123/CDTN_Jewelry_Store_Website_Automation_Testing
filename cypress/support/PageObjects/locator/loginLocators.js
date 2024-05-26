class loginLocators{

    PasswordShopifyInput= '//input[@id="password"]'
    EnterButton= '//button[text()="Enter"]'

    //============================================//
    loginHeader = '//h1[@id="login"]'
    emailLoginInput = '//input[@id="CustomerEmail"]'
    passwordLoginInput = '//input[@id="CustomerPassword"]'
    signBtn = '//button[contains(text(), "Sign in")]'
    logoutButton= '//a[@href="/account/logout"]'
    errorIncorrectCredentialMsg= '//div[@class="errors"]/ul/li'

    //===========================================//

    fogotPasswordBtn = 'a[href="#recover"]'
    resetPasswordHeader = '//h1[contains(text(), "Reset your password")]'
    resetPasswordSubHeader = '//p[contains(text(), "Enter a new password")]'
    emailResetPasswordInput = 'input[id="RecoverEmail"]'
    submitResetPasswordBtn = '//button[contains(text(), "Submit")]'
    cancelResetPasswordBtn = 'a[href="#login"]'
    passwordResetPasswordInput = 'input[id="password"]'
    cfPasswordResetPasswordInput = 'input[id="password_confirmation"]'
    resetPasswordBtn = '//button[contains(text(), "Reset password")]'
    
    //==========================================//
    createAccBtn = 'a[href="/account/register"]'
    createAccHeader = '//h1[contains(text(), "Create account")]'
    firstNameInput = 'input[id="RegisterForm-FirstName"]'
    lastNameInput = 'input[id="RegisterForm-LastName"]'
    emailSignInInput= 'input[id="RegisterForm-email"]'
    passwordSignInInput= 'input[id="RegisterForm-password"]'
    createBtn = '//button[contains(text(), "Create")]'
}

const loginPO = new loginLocators();
export default loginPO;