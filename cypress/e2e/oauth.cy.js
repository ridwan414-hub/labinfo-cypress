describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })
  it('displays sign in page', () => {
    cy.contains('Welcome to Admin Panel')
    cy.contains('Sign In With Google')
  })
  it('displays contents after sign in using google', () => {
    cy.contains('Sign In With Google').click()
  })
})
