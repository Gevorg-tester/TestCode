describe('Assert', () => {
    it('Assert Web Test', () => {
        cy.visit('https://unsplash.com/');
        cy.viewport(1920, 1080);
        cy.location('protocol').should('eq', 'https:');
        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash');
        cy.get('a[class="cLLOA p1cWU jpBZ0 EzsBC KHq0c XHI2L"]').should('be.visible').click();
        cy.get('input[id="user_email"]')
    })
})