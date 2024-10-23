///<reference types="Cypress"/>

import signInPage from "../support/pom/signIn";

   const signIn = new signInPage()
   

describe("Login tests",()=>{
    beforeEach(()=>{
        cy.intercept('https://magento.softwaretestingboard.com/customer/account/login/**').as('signInPage')
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get(".authorization-link > a").first().click({force:true});
        cy.wait('@signInPage')
    })
    it("login with valid credentials",()=>{
      
       signIn.enterEmail("www.husseinamadu634@gmail.com");
       signIn.enterPassword("josh@"+123);
       signIn.clickSignButton()


    })
    it("login with wrong credentials",()=>{
      
        signIn.enterEmail("www.husseu634@gmail.com");
        signIn.enterPassword("jos123");
        signIn.clickSignButton()
 
 
     })
})