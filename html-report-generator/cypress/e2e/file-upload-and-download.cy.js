///<reference types="Cypress"/>
/// <reference types="cypress-downloadfile"/>
describe('File upload and download',()=>{
it('upload',()=>{
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('marguerite-729510__340.jpg')
})
it("download",()=>{
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
})
}) 