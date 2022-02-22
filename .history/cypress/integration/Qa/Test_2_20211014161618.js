describe("Rozetka", () => {
    it('by', () => {
        cy.visit('https://rozetka.com.ua/');
        cy.viewport(1920, 1080);
        cy.get('input[type="text"]').type('iphone 12');
        cy.contains('Найти').click();
        cy.contais
    })
})