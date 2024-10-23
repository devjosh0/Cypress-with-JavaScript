export default class createAccount {

    enterFirstName(firstname) {
        cy.get('#firstname').type(firstname)
    }
    enterLastName(lastname) {
        cy.get('#lastname').type(lastname)
    }
    enterEmail(email) {
        cy.get('#email_address').type(email)
    }

    enterpassword(password) {
        if(password){
            cy.get('#password').type(password)
        }
       return
    }
    enterconfirmPassword(confirmPassword) {
        cy.get('#password-confirmation').type(confirmPassword)
    }
    clickCreateAccountBtn() {
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    }
}