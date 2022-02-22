import Login from '../PageObject/logi'



describe('Assert', () => {

    const login = new Login()


    it('Assert Web Test', () => {
        cy.visit('https://unsplash.com/');
        cy.viewport(1920, 1080);
        cy.location('protocol').should('eq', 'https:');
        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash');

        login.btnLogin()
        .should('be.visible').click();

        login.email()
        .type('pover556565@freg.com')
        .should('have.value', 'pover556565@freg.com');

        login.password()
        .type('hfdjkgg123456')
        .should('have.value', 'hfdjkgg123456');
        
        login.clickBtnLogin()
        .should('be.visible')
        .click();

        cy.contains('Invalid email or password.').should('be.visible')
    })
}) 