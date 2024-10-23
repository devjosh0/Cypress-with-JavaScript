export default class viewCartPage{
    clickViewCartBtn(){
        cy.get('.showcart').click({force:true})
        cy.get(':nth-child(7) > .secondary > .action > span').click({force:true})
    }
}