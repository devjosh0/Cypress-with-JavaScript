///<reference types="Cypress"/>

import deleteItemsPage from "../support/pom/deleteItems.cy";
import signInPage from "../support/pom/signIn";

   const deleteitem = new deleteItemsPage();
   

describe("Login tests",()=>{
    beforeEach(()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get('.showcart').click({force:true})
        cy.get(':nth-child(7) > .secondary > .action > span').click({force:true})
    })
    it("user sholud able to delete items",()=>{
      deleteitem.clickDeleteItemsBtn();

    })
   
})