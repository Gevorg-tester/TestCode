import Login from '../PageObject/logi'

describe('Assert', () => {

    const login = 


    it('Assert Web Test', () => {
        cy.visit('https://unsplash.com/');
        cy.viewport(1920, 1080);
        cy.location('protocol').should('eq', 'https:');
        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash');
        .should('be.visible').click();

        
        .type('pover556565@freg.com')
        .should('have.value', 'pover556565@freg.com');

        
        .type('hfdjkgg123456')
        .should('have.value', 'hfdjkgg123456');
        
        .should('be.visible')
        .click();

        cy.contains('Invalid email or password.').should('be.visible')
    })
}) 