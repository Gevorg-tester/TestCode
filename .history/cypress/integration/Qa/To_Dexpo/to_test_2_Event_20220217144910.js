describe('ToDexpo', ()=> {
    it('Register', ()=> {
        cy.visit('http://localhost:8080/')
        // cy.viewport(1920, 1080);
        cy.get('#header_signin').click();
        cy.get(':nth-child(4) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
        .type('georgivardanyan333@gmail.com');

        cy.get(':nth-child(5) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
        .type('Georgi333&');

        cy.get('.button_row > .btn').click();
        cy.contains('Organizer').click();
        cy.get('.btn').click();

        // cy.viewport(1920, 1080);
        // cy.get('.left > .button_box > .btn_orange').click();
        cy.get(':nth-child(3) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
        .type('78edding anniversary');
        
        // cy.get('input[type="checkbox"]').check('checkbox') // Check checkbox element
        // cy.get('input[type="radio"]').first().check()
        cy.get('.ui-checkbox__checkmark').click()
        cy.get(':nth-child(6) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
        .type('it will be the most beatefull party');
        cy.get('.form_input_shr > .ui-select > .ui-select__content > .ui-select__label > .ui-select__display')
        .click(); // it should be without click. it should be by onfocus: << low severity >>

        cy.get('.ui-select__options > :nth-child(3)').click();
        cy.get(':nth-child(1) > .ui-datepicker > .ui-datepicker__content > .ui-datepicker__label > .ui-datepicker__display')
        .click()

        // cy.get(':nth-child(3) > .ui-icon-button__icon > .ui-icon > svg').click('')
        for(let n = 0; n < 4; n ++){
            cy.get(':nth-child(3) > .ui-icon-button__icon > .ui-icon > svg')
              .click()
          };

          cy.get('.ui-calendar-month__body > :nth-child(3) > :nth-child(4)').click();
          cy.get(':nth-child(2) > .ui-datepicker > .ui-datepicker__content > .ui-datepicker__label > .ui-datepicker__display')
          .click();

          //cy.get(':nth-child(3) > .ui-icon-button__icon > .ui-icon > svg')
          for(let n = 0; n < 4; n ++){
            cy.get(':nth-child(3) > .ui-icon-button__icon > .ui-icon > svg')  //:nth-child(3) > .ui-icon-button__icon > .ui-icon > svg
              .click()
          };

          cy.get(':nth-child(3) > :nth-child(6) > .ui-calendar-week__date').click();
          cy.get('.form_input_row > .ui-select > .ui-select__content > .ui-select__label > .ui-select__display')
          .click();

          cy.contains('GMT +1:00').click();
          cy.contains('Save & continue').click();





          
          // cy.scrollTo(0, 650);
          // cy.get(':nth-child(8) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          // .type('hbggvcfcdcdcfvghj');

          // cy.get(':nth-child(9) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          // .type('rescue');


          // cy.get('.ti-new-tag-input-wrapper').type('keep-silent {enter} mandatory {enter}');
          // cy.get('.main_section > :nth-child(1) > .flex > .ui-checkbox').click()
          // cy.scrollTo(0, 1800);
          // cy.get(':nth-child(3) > .form_input_row > .upload_image_iconstyle > label').click();

          // // cy.get(':nth-child(3) > .form_input_row > .upload_image_iconstyle > label')
          // // .attachFile('Pictures/YXhDVWRTmGU.jpg')

          // cy.get('.ui-textbox__textarea').type('An Ancient Journey that Affects us Today');
          // cy.get('.noaction > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          // .type('hascen anpopox');
          // cy.get('input[type="email"]').type('amboxchashxar@gmail.com');
          // cy.get('input[type="tel"]').type('(374)55636964');
          // cy.get('.main_form_box > :nth-child(1) > .form_checkbox_row > .ui-checkbox > .ui-checkbox__checkmark')
          // .click();

          // cy.get(':nth-child(2) > :nth-child(1) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          // .type('https://facebook.com/');
          // cy.get(':nth-child(2) > :nth-child(2) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          // .type('https://www.linkedin.com/');
          // cy.get(':nth-child(2) > :nth-child(3) > :nth-child(1) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          // .type('https://twitter.com/');
          // cy.get('.main_form_box > :nth-child(2) > :nth-child(3) > :nth-child(2) > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          // .type('https://www.instagram.com/');
          // cy.get(':nth-child(3) > .form_input_row > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          // .type('news.com')

          // cy.get('.sidebar_sticky_wrapper > :nth-child(1) > :nth-child(2) > .sidebar_menu_item_title').click()
          // cy.get('.form_input_hr > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          // .type('entanox');
          // cy.get('.form_input_qr > .ui-textbox > .ui-textbox__content > .ui-textbox__label > .ui-textbox__input')
          // .type('0');
          // cy.get('input[type="number"]').type('18600');
          // cy.get('.ui-textbox__textarea').type('All Things');
          // cy.get('.ui-textbox__textarea').type('honmaldo46@gmail.ru');
          // cy.get('input[type="text"]').type('abidance {enter} sumbiks {enter}');
          // cy.contains('Add price type').click()

    })
})

