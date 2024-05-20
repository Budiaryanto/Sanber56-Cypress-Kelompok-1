import ProductPage from '../../support/PageObjectModel/POMuser4'

function GenerateRandomString() {
    const randomString = Math.random().toString(36).substring(2,10)
    return randomString
    }
    let randomString = GenerateRandomString()

    function GenerateRandomProvince() {
        const randomString = Math.random().toString(36).substring(2,10)
        const randomProvince = "A" + randomString
        return randomProvince
        }
        let randomStringProvince = GenerateRandomProvince()
  
    function generateRandomNumber(min, max) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      const number = "08" + randomNumber
      return number
    }
    let randomNumber = generateRandomNumber(1000000000, 9999999999)
  
    function generateRandomNumberPostalCode(min = 5, max = 6) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      const number = randomNumber
      return number
    }
    let randomNumberPostalCode = generateRandomNumberPostalCode(10000, 99999)

describe('template spec', () => {
    beforeEach(() => {
    //   cy.clearCookies()
    //   cy.clearLocalStorage()
      cy.visit(ProductPage.loginDashboard)
      cy.fixture('DataUser4.json').then((users) => {
        const userData = users[1]
        cy.loginAccountBudi(userData.email, userData.password)
      })
    })
    it('Success Edit User Data', () => {
      cy.visit(ProductPage.editPage)
      cy.get(ProductPage.openEditUserPage).click()
      cy.get(ProductPage.firstName).clear().type(randomString)
      cy.get('#lastname').clear().type(randomString)
      cy.get('#company').clear().type(randomString)
      cy.get('#telephone').clear().type(randomNumber)
      cy.get('#street_1').clear().type(randomString)
      cy.get('#city').clear().type(randomString)
      cy.get('#region').clear().type(randomStringProvince)
      cy.get('#zip').clear().type(randomNumberPostalCode)
      cy.get('#country').select('Panama')
      cy.get(ProductPage.saveButton).click()
      cy.EditVerifySuccess('.message-success > div', ProductPage.successMessage )
    })
  
    it('Failed Edit User Data', () => {
      cy.visit(ProductPage.editPage)
      cy.get(ProductPage.openEditUserPage).click()
      cy.get(ProductPage.firstName).clear()
      cy.get(ProductPage.saveButton).click()
      cy.EditVerifyFailed('.message-error',ProductPage.errorMessage)
    })
  })