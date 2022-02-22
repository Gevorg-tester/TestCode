describe('Content', () => {
    it('Content_Downloadables', () => {
        cy.visit('http://localhost:8080/edit-event/203#basic_information');
        cy.viewport(1920, 1080);
        cy.get('.container > .register_form > .main_section > :nth-child(4) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
        .type('georgivardanyan333@gmail.com');   
        cy.get('.container > .register_form > .main_section > :nth-child(5) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
        .type('Georgi333&');
        cy.get('.container > .register_form > .main_section > .button_row > .btn').click();
        .click();
        cy.contains('Downloadables').click()
        cy.get('.ui-textbox__input').type('QUIZ YOURSELF ON AFFECT VS. EFFECT!');
        cy.get('.ui-textbox__textarea')
        .type('First recorded before 900; Middle English titel, Old English titul, from Medieval Latin titulus ');
        cy.get('.ti-new-tag-input').type('keep-silent {enter} mandatory {enter}');
        cy.get(':nth-child(7) > .btn').click()
    })
})