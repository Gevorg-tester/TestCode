describe("Rozetka", () => {
    it('by', () => {
        cy.visit('https://rozetka.com.ua/')
        cy.viewport(1920, 1080)
        cy.get('input[]')
    })
})