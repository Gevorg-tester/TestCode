import Login from '../PageObject/logi'

describe('Assert', () => {

    const login = 

    it('Assert Web Test', () => {
        cy.visit('https://unsplash.com/');
        cy.viewport(1920, 1080);
        cy.location('protocol').should('eq', 'https:');
        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash');
        

        
        

        
        
        
        cy.get('input[type="submit"]').should('be.visible')
        .click();   

        cy.contains('Invalid email or password.').should('be.visible')
    })
}) 