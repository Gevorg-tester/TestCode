describe('Save_Continue', () => {
    it('Save_Continue', () => {
        cy.visit('https://www.todexpo.com/edit-event/282#basic_information');
        cy.get('.container > .register_form > .main_section > :nth-child(4) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
        .type('gevorgvardanyan1995@gmail.com');   
        cy.get('.container > .register_form > .main_section > :nth-child(5) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
        .type('Gevorg.2016');
        cy.get('.container > .register_form > .main_section > .button_row > .btn').click();
        //  cy.scrollTo(0, 650);
        cy.get(':nth-child(8) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
        .type('https://www.youtube.com/');

        cy.get(':nth-child(9) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
        .type('rescue');


          cy.get('.ti-new-tag-input-wrapper').type('keep-silent {enter} mandatory {enter}');
          cy.get('.main_section > :nth-child(1) > .flex > .ui-checkbox').click()
          cy.scrollTo(0, 1800);
          cy.get(':nth-child(3) > .form_input_row > .upload_image_iconstyle > label').click();

          // cy.get(':nth-child(3) > .form_input_row > .upload_image_iconstyle > label')
          // .attachFile('Pictures/YXhDVWRTmGU.jpg')

          cy.get('.ui-textbox__textarea').type('An Ancient Journey that Affects us Today');
          cy.get('.noaction > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          .type('hascen anpopox');
          cy.get('input[type="email"]').type('amboxchashxar@gmail.com');
          cy.get('input[type="tel"]').type('(374)55636964');
          cy.get('.main_form_box > :nth-child(1) > .form_checkbox_row > .ui-checkbox > .ui-checkbox__checkmark')
          .click();

          cy.get(':nth-child(2) > :nth-child(1) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          .type('https://facebook.com/');
          cy.get(':nth-child(2) > :nth-child(2) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          .type('https://www.linkedin.com/');
          cy.get(':nth-child(2) > :nth-child(3) > :nth-child(1) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          .type('https://twitter.com/');
          cy.get('.main_form_box > :nth-child(2) > :nth-child(3) > :nth-child(2) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          .type('https://www.instagram.com/');
          cy.get(':nth-child(3) > .form_input_row > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          .type('news.com')

          cy.get('.sidebar_sticky_wrapper > :nth-child(1) > :nth-child(2) > .sidebar_menu_item_title').click()
          cy.get('.form_input_hr > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          .type('entanox');

          cy.get('.form_input_qr > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          .type('0');

          cy.get('.form_input_qrl > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          .type('18600');

          cy.get(':nth-child(3) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__textarea')
          .type('All Things');

          cy.get(':nth-child(4) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__textarea')
          .type('honmaldo46@gmail.ru');

          cy.get('input[class="ti-new-tag-input ti-valid"]').type('abidance {enter} sumbiks {enter}');
          cy.contains('Add price type').click()


        cy.get('.sidebar_sticky_wrapper > :nth-child(1) > :nth-child(5) > .sidebar_menu_item_title')
        .click();
        cy.get('.ui-textbox__input').type('Amanorya Ton');
        cy.get('.main_form_box > :nth-child(1) > :nth-child(3) > .ui-checkbox > .ui-checkbox__checkmark')
        .click();
        cy.get(':nth-child(7) > .form_input_hr > .ui-select > .ui-select__content > .ui-select__label > .ui-select__display')
        .click();
        // cy.get('.is-highlighted').click();
        // cy.get('.ui-textbox__textarea').type('Conserving the lands and waters on which all life depends');
        // cy.get('.ti-new-tag-input ti-valid').type('oppropiate {enter} stages {enter}')
    })
})
