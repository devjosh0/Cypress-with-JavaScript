export default class signInPage{
    enterEmail(email){
cy.get("#email").type(email)
    }
    enterPassword(pass){
cy.get("#pass").type(pass)
    }
    clickSignButton(){
cy.get("#send2").click()
    }
}