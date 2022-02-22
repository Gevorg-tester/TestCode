describe('Scrolling', function() {
    it('Scroll to the car', function() {
        cy.visit('https://unsplash.com/');
        cy.get('[data-test=nav-bar-search-form-input]').type('car{enter}');
        cy.get('h1[class="Aa1sS j8AIa xNKUO dvBHu oh0KJ tiVPC PP9J3"]').should('have.text', 'Car');
        cy.scrollTo(0, 3500);
        cy.get(':nth-child(8) > .YdIix > :nth-child(1) > .MbNnd > .zmDAx > .rEAWd > .omfF5 > .MorZF > .VQW0y > [data-test=photo-grid-multi-col-img]')
    })
})