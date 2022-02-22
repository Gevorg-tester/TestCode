describe('Assert', () => {
    it('Assert Web Test', () => {
        cy.visit('https://unsplash.com/');
        cy.viewport(550, 750)
    })
})