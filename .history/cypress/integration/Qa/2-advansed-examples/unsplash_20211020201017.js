describe('Assert', () => {
    it('Assert Web Test', () => {
        cy.visit('https://unsplash.com/');
        cy.viewport(1920, 1080);
        cy.location('protocol').should('eq', 'https:');
        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash');
        

        
        

        
        .type('hfdjkgg123456')
        .should('have.value', 'hfdjkgg123456');
        
        cy.get('input[type="submit"]').should('be.visible')
        .click();   

        cy.contains('Invalid email or password.').should('be.visible')
    })
}) 