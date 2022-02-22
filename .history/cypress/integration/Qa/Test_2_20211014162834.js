describe("Rozetka", () => {
    it('by', () => {
        cy.visit('https://rozetka.com.ua/');
        cy.viewport(1920, 1080);
        cy.get('input[type="text"]').type('iphone 12');
        cy.contains('Найти').click();
        cy.contains('Мобильный телефон Apple iPhone 12 Pro Max 128GB Pacific Blue Официальная гарантия').click()
        cy.get('.buy-button').click
    })
})