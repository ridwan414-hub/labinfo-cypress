describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001')
    })

    it('displays sign in page', () => {
        cy.contains('Welcome to Admin Panel')
        cy.contains('Sign In With Google')
    })
    it('displays contents after sign in using userid and password', () => {
        cy.get('#email').type(`${Cypress.env('USER_NAME')}`)
        cy.get('#password').type(`${Cypress.env('PASSWORD')}`)
        cy.get('form').submit()
        cy.contains('Poridhi Lab Information Panel')
    })
})
