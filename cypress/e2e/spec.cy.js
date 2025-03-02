describe('Teste de Cadastro', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/')
  })

  it('verifica se o formulário de cadastro está visível', () => {
    cy.get('#register-form').should('be.visible')
  })

  it('Verifica se tem três campos de input', () => {
    cy.get('.input-field').should('have.length', 3)
  })

  it('Verifica se o botão de cadastro contém o texto correto', () => {
    cy.get('#register-button').should('have.text', 'Cadastrar')
  })

  it('Verifica o link do login', () => {
    cy.get('.login-link').should('have.attr', 'href', '/login')
  })

  it('Preenche as informações de cadastro e clica no botão de cadastrar', () => {
    cy.get('[type="text"]').type('Gustavao Ferreira')
    cy.get('[type="email"]').type('Gustavo12345@hotmail.com')
    cy.get('[type="password"]').type('Gus12345')
    cy.get('#register-button').click()
  })
})
