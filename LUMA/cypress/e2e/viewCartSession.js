///<reference types="Cypress"/>

import viewCartPage from "../support/pom/viewCart"



   const view = new viewCartPage();
   

describe("Login tests",()=>{
    beforeEach(()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
    
    })
    it("user should able to view cart",()=>{
      view.clickViewCartBtn();

    })
   
})