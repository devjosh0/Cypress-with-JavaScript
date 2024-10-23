///<reference types="Cypress"/>

import forgetPasswordPage from "../support/pom/forgetPassword";
import signInPage from "../support/pom/signIn";

   const forgetpass = new forgetPasswordPage();
   

describe("Login tests",()=>{
    beforeEach(()=>{
        cy.visit('https://magento.softwaretestingboard.com/customer/account/forgotpassword/')
    })
    it("user can able to reset password",()=>{
      
  forgetpass.enterEmail();
  forgetpass.clickRestPasswordBtn()


    })

})