export default class deleteItemsPage{
    clickDeleteItemsBtn(){
        cy.get(':nth-child(4) > .item-actions > td > .actions-toolbar > .action-delete').click()
    }
}