describe('Content', () => {
    it('Content_Downloadables', () => {
        cy.visit('https://www.todexpo.com/edit-event/282#basic_information');
        cy.viewport(1920, 1080);
        cy.get('.container > .register_form > .main_section > :nth-child(4) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
        .type('gevorgvardanyan1995@gmail.com');   
        cy.get('.container > .register_form > .main_section > :nth-child(5) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
        .type('Gevorg.2016');
        cy.get('.container > .register_form > .main_section > .button_row > .btn').click();
        cy
    })
})