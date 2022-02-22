describe('Assert', () => {
    it('Assert Web Test', () => {
        cy.visit('https://unsplash.com/');
        cy.viewport(1920, 1080);
        cy.location('protocol').should('eq', 'https:');
        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash');
        cy.get('a[class="cLLOA p1cWU jpBZ0 EzsBC KHq0c XHI2L"]').should('be.visible').click();
        cy.get('input[id="user_email"]').type('pover556565@freg.com').should('have.value', 'pover556565@freg.com');
        cy.get('input[id="user_password"]').type('hfdjkgg123456').should('have.value', 'hfdjkgg123456');
        cy.get('input[type="submit"]"').should('be.visible').click()
    })
})