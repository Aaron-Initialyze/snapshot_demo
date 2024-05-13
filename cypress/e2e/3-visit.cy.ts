/// <reference types="Cypress" />

describe("basics", ()=>{
    it('visit explanation', () => {
        cy.visit("https://publish-p30618-e359402.adobeaemcloud.com/components/layout/accordion.html")
        cy.get("#accordion-8ba2d79570-item-8c703d28c2").click().compareSnapshot("name2")
       
    });
});