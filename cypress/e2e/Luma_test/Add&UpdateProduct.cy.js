import ProductPage from '../../support/PageObjectModel/POMuser4'

//Generate Random Negative Number
function generateRandomNegativeNumber(min = -100, max = -1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
//Generate Random number
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

describe('template spec', () => {
    beforeEach(() => {
        //Clear cookies and local storage before each test
        cy.clearCookies()
        cy.clearLocalStorage()
        //Login
        cy.LoginDashboard(ProductPage.Login_Dashboard)
        cy.fixture('DataUser4.json').then((users) => {
            const userdata = users[0]
            cy.LoginUser4(userdata.email,userdata.password)
          })
        })
    //Failed Choose Product
    //Product tas
    it('Failed choose product - Qty is empty', () => {
        cy.get(ProductPage.Gear_Products).click()
        cy.get(ProductPage.Bags_Category).click()
        cy.get(ProductPage.Overnight_Duffle).click()
        cy.get('#qty').clear()
        //cy.get('#product-addtocart-button').click()
        cy.AddtoCart(ProductPage.Add_To_Cart_Button)
        cy.VerifyMessage('#qty-error','Please enter a valid number in this field.')
    })
    //Product tas
    it('Failed choose product - Qty negative', () => {
        const randomNegativeNumber = generateRandomNegativeNumber()
        cy.log('Generated Random Negative Number: ' + randomNegativeNumber)
        //untuk mencetak angka negatif
        cy.get(ProductPage.Gear_Products).click()
        cy.get(ProductPage.Bags_Category).click()
        cy.get(ProductPage.Overnight_Duffle).click()
        cy.QtyKetik('#qty',randomNegativeNumber)
        //cy.get('#product-addtocart-button').click()
        cy.AddtoCart(ProductPage.Add_To_Cart_Button)
        cy.VerifyMessage('#qty-error','Please enter a quantity greater than 0.')
    })
    //Success Choose Product
    //Produk tas
    it('Success choose product - 1 variation', () => {
        const randomNumber = generateRandomNumber(1, 50) // Angka acak antara 1 dan 50
        cy.log('Generated Random Number: ' + randomNumber)
        //untuk mencetak nomor acak yang dihasilkan
        cy.get(ProductPage.Gear_Products).click()
        cy.get(ProductPage.Bags_Category).click()
        cy.get(ProductPage.Overnight_Duffle).click()
        cy.QtyKetik('#qty',randomNumber)
        cy.AddtoCart(ProductPage.Add_To_Cart_Button)
        cy.VerifyVisible(ProductPage.Counters_Cart)
    })
    //Produk tas
    it('Success choose product - More than 1 variation', () => {
        const randomNumber = generateRandomNumber(1, 50) // Angka acak antara 1 dan 50
        cy.log('Generated Random Number: ' + randomNumber)
        //untuk mencetak nomor acak yang dihasilkan
        cy.get(ProductPage.Gear_Products).click()
        cy.get(ProductPage.Fitness_Equipment_Category).click()
        cy.get(ProductPage.Sprite_Yoga_Strap).click()
        cy.QtyKetik(':nth-child(1) > .col.qty > .control > .input-text',randomNumber)
        cy.QtyKetik(':nth-child(2) > .col.qty > .control > .input-text',randomNumber)
        cy.QtyKetik(':nth-child(3) > .col.qty > .control > .input-text',randomNumber)
        cy.AddtoCart(ProductPage.Add_To_Cart_Button)
        cy.VerifyVisible(ProductPage.Counters_Cart)
    })
    //Produk Fitness
    it('Failed Customize and Add to Cart', () => {
        const randomNumber = generateRandomNumber(99, 999) // Angka acak antara 99 dan 999
        cy.log('Generated Random Number: ' + randomNumber)
        //untuk mencetak nomor acak yang dihasilkan
        cy.get(ProductPage.Gear_Products).click()
        cy.get(ProductPage.Fitness_Equipment_Category).click()
        cy.get(ProductPage.Sprite_Yoga_Companion_Kit).click()
        cy.get('#bundle-slide').click()
        cy.get('div.product-add-form').invoke('css', 'display', 'block')
        cy.get('#bundle-option-1-2').should('be.visible')
        cy.RadioButton('#bundle-option-1-2')
        cy.QtyKetik('#bundle-option-1-qty-input',randomNumber)
        cy.QtyKetik('#bundle-option-2-qty-input',randomNumber)
        cy.RadioButton('#bundle-option-3-7')
        cy.QtyKetik('#bundle-option-3-qty-input',randomNumber)
        cy.QtyKetik('#bundle-option-4-qty-input',randomNumber)
        cy.QtyKetik('#qty',randomNumber)
        cy.AddtoCart(ProductPage.Add_To_Cart_Button)
        cy.VerifyMessage(ProductPage.Error_Message,'The requested qty exceeds the maximum qty allowed in shopping cart')
    })
    //Produk fitnes
    it('Success Customize and Add to Cart', () => {
        const randomNumber = generateRandomNumber(1, 50) // Angka acak antara 1 dan 50
        cy.log('Generated Random Number: ' + randomNumber)
        //untuk mencetak nomor acak yang dihasilkan
        cy.get(ProductPage.Gear_Products).click()
        cy.get(ProductPage.Fitness_Equipment_Category).click()
        cy.get(ProductPage.Sprite_Yoga_Companion_Kit).click()
        cy.get('#bundle-slide').click()
        cy.get('div.product-add-form').invoke('css', 'display', 'block')
        cy.get('#bundle-option-1-2').should('be.visible')
        cy.RadioButton('#bundle-option-1-2')
        cy.QtyKetik('#bundle-option-1-qty-input',randomNumber)
        cy.QtyKetik('#bundle-option-2-qty-input',randomNumber)
        cy.RadioButton('#bundle-option-3-7')
        cy.QtyKetik('#bundle-option-3-qty-input',randomNumber)
        cy.QtyKetik('#bundle-option-4-qty-input',randomNumber)
        cy.QtyKetik('#qty',randomNumber)
        cy.AddtoCart(ProductPage.Add_To_Cart_Button)
        cy.VerifyVisible(ProductPage.Counters_Cart)
    })
    //Jika click nama produk bukan gambarnya
    //Product Jam tangan
    it('Success choose product - Click product name', () => {
        const randomNumber = generateRandomNumber(1, 50) // Angka acak antara 1 dan 50
        cy.log('Generated Random Number: ' + randomNumber)
        //untuk mencetak nomor acak yang dihasilkan
        cy.get(ProductPage.Gear_Products).click()
        cy.get(ProductPage.Watches_Category).click()
        cy.get(ProductPage.Clamber_Watch).click()
        cy.QtyKetik('#qty',randomNumber)
        cy.AddtoCart('#product-addtocart-button')
        cy.VerifyVisible(ProductPage.Counters_Cart)
    })
    //Next dan Previous Gambar
    //Produk jam tangan
    it('Success choose product - Next & Previous Images', () => {
        const randomNumber = generateRandomNumber(1, 50) // Angka acak antara 1 dan 50
        cy.log('Generated Random Number: ' + randomNumber)
        //untuk mencetak nomor acak yang dihasilkan
        cy.get(ProductPage.Gear_Products).click()
        cy.get(ProductPage.Watches_Category).click()
        cy.get(ProductPage.Clamber_Watch).click()
        cy.get(ProductPage.Next).click()
        cy.get(ProductPage.Previous).click()
        cy.QtyKetik('#qty',randomNumber)
        cy.AddtoCart(ProductPage.Add_To_Cart_Button)
        cy.VerifyVisible(ProductPage.Counters_Cart)
    })
    //Melihat detail, more information, dan review terlebih dahulu sebelum add to cart
    //Produk Fitness
    it('Success choose product - More information', () => {
        const randomNumber = generateRandomNumber(1, 50) // Angka acak antara 1 dan 50
        cy.log('Generated Random Number: ' + randomNumber)
        //untuk mencetak nomor acak yang dihasilkan
        cy.get(ProductPage.Gear_Products).click()
        cy.get(ProductPage.Fitness_Equipment_Category ).click()
        cy.get(ProductPage.Quest_Lumaflex_Band).click()
        cy.get(ProductPage.Details).click().should('be.visible')
        cy.get(ProductPage.More_Information).click().should('be.visible')
        cy.get(ProductPage.Reviews).click().should('be.visible')
        cy.QtyKetik('#qty',randomNumber)
        cy.AddtoCart(ProductPage.Add_To_Cart_Button)
        cy.VerifyVisible(ProductPage.Counters_Cart)
    })
    //Update Shopping Cart
    //produk fitness
    it('Success Update Shopping Cart - Edit Qty in Cart List', () => {
        const randomNumber = generateRandomNumber(1, 50) // Angka acak antara 1 dan 50
        cy.log('Generated Random Number: ' + randomNumber)
        //untuk mencetak nomor acak yang dihasilkan
        cy.get(ProductPage.Counters_Cart).click()
        //cy.get('#cart-item-58397-qty').clear().type(randomNumber)
        cy.QtyKetik(ProductPage.Update_Qty_Fitness1,randomNumber)
        cy.get('#update-cart-item-60484').click()
        cy.VerifyVisible(ProductPage.Counters_Cart)
    })
    //produk fitness
    it('Success Update Shopping Cart - Edit Qty in View Detail', () => {
        const randomNumber = generateRandomNumber(1, 50) // Angka acak antara 1 dan 50
        cy.log('Generated Random Number: ' + randomNumber)
        //untuk mencetak nomor acak yang dihasilkan
        cy.get(ProductPage.Counters_Cart).click()
        cy.get(':nth-child(7) > .secondary > .action > span').click()
        cy.QtyKetik(ProductPage.Update_Qty_Fitness2,randomNumber)
        cy.get('.update').click()
        cy.VerifyVisible(ProductPage.Counters_Cart)
    })
    it('Success Update Shopping Cart - Cancel Delete in Cart List', () => {
        const randomNumber = generateRandomNumber(1, 50) // Angka acak antara 1 dan 50
        cy.log('Generated Random Number: ' + randomNumber)
        //untuk mencetak nomor acak yang dihasilkan
        cy.get(ProductPage.Counters_Cart).click()
        cy.get(ProductPage.Delete).click()
        cy.get(ProductPage.Confirmation_Dialog).should('be.visible')
        cy.get(ProductPage.Cancel).click()
        cy.VerifyVisible(ProductPage.Counters_Cart)
    })
  })