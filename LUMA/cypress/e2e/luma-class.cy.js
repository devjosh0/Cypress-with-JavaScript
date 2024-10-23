export default class lumaObject{
         

        ///VISIT SITE

    visit(){
 cy.visit("https://magento.softwaretestingboard.com/")
    }


        ///CREATE NEW ACCOUNT

    createAccount(firstname,lastname,email,password,comfirmPassword){
        cy.get('.panel > .header > :nth-child(3) > a').click()
        cy.get('#firstname').type(firstname)
        cy.get('#lastname').type(lastname)
        cy.get('#email_address').type(email)
        cy.get('#password').type(password)
        cy.get('#password-confirmation').type(comfirmPassword)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    }



        /// SIGN-IN FOR EXISTING USERS

    signIn(email,password){
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('#email').type(email)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    }



        ///ADD ITEMS TO CART

    addTOcart(){
        cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('#option-label-size-143-item-169').click()
        cy.get('#option-label-color-93-item-56').click()
        cy.get('#product-addtocart-button').click()
    }


        ///UPDATES ITEMS IN CARTS

    updatesCarts(quantity){
        //Updates using quantity
        cy.get('#option-label-color-93-item-50').click()
        cy.get('#qty').clear()
        cy.get('#qty').type(quantity)
        cy.get('#option-label-size-143-item-168').click()
        cy.get('#product-addtocart-button').click()

        //Updates by adding new items
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('#option-label-color-93-item-53').click()
        cy.get('#option-label-size-143-item-169').click()
        cy.get('#product-addtocart-button').click()
    }



     ///VIEW ITEMS IN CART
    viewCart(){
        cy.get('.showcart').click({force:true})
        cy.get(':nth-child(7) > .secondary > .action > span').click({force:true})
    }

        ///DELETE ITEMS IN CARTS


    deleteItemsinCarts(){
        cy.get(':nth-child(4) > .item-actions > td > .actions-toolbar > .action-delete').click()
       
    }


           ///FORGET PASSWORD
     forgetPassword(email){
            cy.visit('https://magento.softwaretestingboard.com/customer/account/forgotpassword/')
               cy.get('#email_address').type(email)
               cy.wait(20000)
               cy.get('#form-validate > .actions-toolbar > div.primary > .action').click() 
           }
          
       
       
}