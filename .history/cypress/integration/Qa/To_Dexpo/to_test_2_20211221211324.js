discribe('ToDexpo', ()=> {
    it('Register', ()=> {
        cy.visit('https://www.todexpo.com/how-it-works')
        cy.viewport(1920, 1080);
        cy.get('button[id="header_signin"]').click();
        cy.get('.text > .reg_form_link').click();
        cy.get('input[type="text"]').type('cvnghdkcd54554sdfddf5@.ru');
        cy.get(':nth-child(5) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input').type('dshgdhsfsdhf');
        cy.get(':nth-child(7) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input').type('sfddfjvnc');
        cy.get('.button_row > .btn').click();
        cy.get('.pwd_validation_box > .right > :nth-child(1)').should()
        cy.contains('Invalid email.').should('be.visible')
    })
})