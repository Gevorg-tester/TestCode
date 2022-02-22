describe('Scrolling', function() {
    it('Scroll to the car', function() {
        cy.visit('https://unsplash.com/');
        cy.get('[data-test=nav-bar-search-form-input]').type('car{enter}');
        cy.get('h1[class="Aa1sS j8AIa xNKUO dvBHu oh0KJ tiVPC PP9J3"]').should(have)
    })
})