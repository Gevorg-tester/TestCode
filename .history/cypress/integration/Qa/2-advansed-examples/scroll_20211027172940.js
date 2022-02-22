describe('Scrolling', function() {
    it('Scroll to the car', function() {
        cy.visit('https://unsplash.com/');
        cy.get('[data-test=nav-bar-search-form-input]').type('car', '{}')
    })
})