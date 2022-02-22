describe('lists', function() {
    it('lists try', function() {
        // cy.visit('https://www.liveworksheets.com/worksheets/en/English_as_a_Second_Language_(ESL)/Mixed_tenses/1a_Mixed_verb_tenses_la1634356sv');
        // cy.get('#textbox0').type('have you been exercising');
        // cy.get('#textbox1').type('were you doing');
        // cy.get('#textbox2').type('was trying');
        // cy.get('#textbox3').type('have had');
        // cy.get('#textbox4').type('snows');
        // cy.get('#textbox5').type('came');
        // cy.get('#textbox6').type('will have been studying');
        // cy.get('#textbox7').type('arrived');
        // cy.get('#textbox8').type('has been living');
        // cy.get('#textbox9').type('was living');
        // cy.get('#textbox10').type('will lose');
        // cy.get('#textbox12').type('arrived');
        // cy.get('#textbox11').type('had bought');


        // cy.get('#textbox13').type('has');
        // cy.get('#textbox14').type('won');
        // cy.get('#textbox15').type('fell');
        // cy.get('#textbox16').type('was watching');
        // cy.get('#textbox17').type('has');
        // cy.get('#textbox18').type('been');
        // cy.get('#textbox19').type('is traveling');
        // cy.get('#textbox20').type('do');
        // cy.get('#textbox21').type('had been teaching');
        // cy.get('#textbox22').type('go');
        // cy.get('#textbox23').type('worked');
        // cy.get('#textbox24').type('found');
        // cy.get('#textbox25').type('had lost');
        // cy.get('#textbox26').type('told');
        // cy.get('#textbox27').type('will be raining');
        // cy.get('#textbox28').type('will not go');
        // cy.get('#textbox29').type('built');
        // cy.get('#textbox30').type('arrived');
        // cy.get('#textbox31').type('were having');
        // cy.get('#textbox32').type('have just had');
        // cy.get('#textbox33').type('was playing');
        // cy.get('#textbox34').type('was taking');
        // cy.get('#textbox35').type('will visit');
        // cy.get('#textbox36').type('have not seen');
        // cy.get('#textbox37').type('has been playing');
        // cy.get('#capafinish > b').click();
        // cy.get('tbody > :nth-child(1) > :nth-child(1) > img').click()
        // cy.scrollTo(0, 500);


        cy.visit('https://www.list.am/');
        cy.viewport(1920, );
        cy.get('input[id="idSearchBox"]').type('mazda 3 2011 {enter}');
        cy.scrollTo(0, 2000);
        cy.get('[href="/item/13158329"] > :nth-child(2) > :nth-child(1)')
        .click();                                                                                                       
        cy.get('.email > a').click();
        cy.get('.bblink').click();
        cy.get('input[id="_idyour_email"]')
        .type('gfgjkhdfgh1234@mail.ru');-

        cy.get('input[id="_idpassword"]')
        .type('gfhjhvbn4546');
        cy.get('#loginaction__form_action0').click();
        cy.contains('Դեռ գրանցված չե՞ք').should('be.visible');
        cy.get('.bblink').click();
        cy.get('input[id="_idyour_email"]')
        .type('fghjkbhjfjg663@mail.ru');

        cy.get('input[id="_idpassword"]')
        .type('hjcfghjmvh5646541');

        cy.get('input[id="_idconfirm_password"]')
        .type('hjcfghjmvh5646541');

        cy.get('#_idagree').click();
        cy.get('#registeraction__form_action0').click();
        cy.contains('Անվտանգության կոդ').should('be.visible');
        cy.get('#l').click();
        
    })
})