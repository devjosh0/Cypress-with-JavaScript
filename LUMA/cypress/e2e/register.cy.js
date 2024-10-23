import createAccount from "../support/pom/create-account"


const create = new createAccount();

describe("create account as a new user ",()=>{
    beforeEach(()=>{
       // cy.intercept('https://magento.softwaretestingboard.com/customer/account/login/**').as('signInPage')
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get('.panel > .header > :nth-child(3) > a').click();
        //cy.wait('@signInPage')
    })
    it("create account with valid credentials",()=>{
      
    create.enterFirstName("test");
    create.enterLastName("user");
    create.enterEmail("www.husseinamadu634@gmail.com");
    create.enterpassword("pass123#");
    create.enterconfirmPassword("pass123#");
    create.clickCreateAccountBtn();
 
     })
    context("with empty fields",()=>{
        it("create account with empty password",()=>{
       
            create.enterFirstName("test");
            create.enterLastName("user");
            create.enterEmail("www.hussein4@gmail.com");
            create.enterpassword();
            create.enterconfirmPassword("pass123#");
            create.clickCreateAccountBtn();
      
      
          })
    })
   
})