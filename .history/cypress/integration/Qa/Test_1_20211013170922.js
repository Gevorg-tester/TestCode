describe("Log in", function() {
    it("Sing in", function() {
        cy.visit("https://unsplash.com/")
        cy.contains("Log in").click()
        cy.get('input[type="email"]').type('gt1234@gmail.com')
        cy.get('input[type="password"]').type('gfhjhjv58974')
        cy.get('input[type="submit"]').
    })
})