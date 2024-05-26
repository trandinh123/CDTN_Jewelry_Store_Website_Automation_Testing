 class CommonLocator {
  //=========================================================/
  PasswordInput= '//input[@id="password"]'
  EnterButton= '//button[text()="Enter"]'
  logoImg= '//div[@class="header__heading-logo-wrapper"]/img'
  homeHeader= '//a/span[text()="Home"]'
  catalogHeader='//a/span[text()="Catalog"]'
  contactHeader= '//a/span[text()="Contact"]'
  
  
 }
const commonLocator = new CommonLocator()
export default commonLocator