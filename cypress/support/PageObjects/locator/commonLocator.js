 class CommonLocator {
  languageSelector = '#requestCulture_RequestCulture_UICulture_Name'
  
  userNameInput = '#txtUsername'
  passwordInput = '#txtPassword'
  loginBtn = '.wrap input[type="submit"]'
  nameInput = '#Name'
  desInput = '#Description'
  editBtn = ".dt-center .editLink"
  importBtn = 'button[id="upload"]'
  selectFile = '.modal-body input[type="file"]'
  importSubmit = '.modal-footer input[type="submit"]'
  deleteBtn = '#append-button input[type="submit"]'
  toastMessage = '//div[@class="errors"]/ul/li'

  firstTblItemName = 'tbody tr:nth-child(1) td:nth-child(1)'

  searchBox = 'input[type="search"]'
  optionList = '#datatable tbody tr'
  trashBtn = 'td.dt-center a:nth-child(3)'
  dataEmptyMessage = '.dataTables_empty'



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