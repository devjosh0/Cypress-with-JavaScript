export default class forgetPasswordPage{
    enterEmail(email){
        cy.get('#email_address').type(email)
        cy.wait(20000)
        
    }
    clickRestPasswordBtn(){
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click() 
    }
}