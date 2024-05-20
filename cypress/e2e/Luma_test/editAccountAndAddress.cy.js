function GenerateRandomString() {
    const randomString = Math.random().toString(36).substring(2,10)
    return randomString
    }
    let randomString = GenerateRandomString()
  
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
      cy.clearCookies()
      cy.clearLocalStorage()
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.loginAccountBudi('arihuang2@gmail.com', 'Password@')
      cy.get('#send2').click()
    })
    it('Success Edit User Data', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/')
      cy.get('.box-billing-address > .box-actions > .action > span').click()
      cy.get('#firstname').clear().type('Budi')
      cy.get('#lastname').clear().type('Haryanto')
      cy.get('#company').clear().type('Sanber')
      cy.get('#telephone').clear().type("08123456")
      cy.get('#street_1').clear().type('Gajah Mada')
      cy.get('#city').clear().type('Jakarta')
      cy.get('#region').clear().type('Alaska')
      cy.get('#zip').clear().type('00111')
      cy.get('#country').select('Panama')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
      cy.get('.message-success > div').should('contain.text','You saved the address')
    })
  
    it('Failed Edit User Data', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/')
      cy.get('.box-billing-address > .box-actions > .action > span').click()
      cy.get('#firstname').clear()
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
      cy.get('.message-error').should('not.be.null')
    })
  })