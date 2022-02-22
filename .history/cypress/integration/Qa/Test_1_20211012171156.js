describe("Log in", function() {
    it("Sing in", function() {
        cy.visit("https://unsplash.com/")
        cy.contains("Submit a photh").click()
    })
})