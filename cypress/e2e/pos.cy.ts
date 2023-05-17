describe('Pos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.contains('Fazer Login').click();
    cy.url().should('include', '/signin');

    cy.get('input[placeholder*="CPF/CNPJ"]').type('485.180.138.60');
    cy.get('input[placeholder*="Senha"]').type('12345678');
    cy.contains('Login').click();
    cy.url().should('include', '/dashboard');
  });

  it('should be on /pos page', () => {
    cy.visit('http://localhost:3000/pos');
    cy.url().should('include', '/pos');

    cy.get(
      '#__next > div.styles__CenterContainer-sc-512a4f25-0.iefXOW > div > div:nth-child(3) > button',
    ).click();

    cy.get(
      '#__next > div.styles__CenterContainer-sc-512a4f25-0.iefXOW > div > div:nth-child(3) > button.styles__Container-sc-8aee437d-0.hKAuKZ',
    ).click();

    cy.contains(/44,90/i).should('be.visible');

    cy.get(
      '#__next > div.styles__CenterContainer-sc-512a4f25-0.iefXOW > div > div:nth-child(3) > button.styles__Container-sc-8aee437d-0.hKAuKZ',
    ).click();

    cy.get(
      '#__next > div.styles__CenterContainer-sc-512a4f25-0.iefXOW > form > div.styles__ContentColumn-sc-27b406f8-4.jXaeeL > div:nth-child(2) > div > div:nth-child(3) > div > div > div > input',
    ).type('123');

    cy.get(
      '#__next > div.styles__CenterContainer-sc-512a4f25-0.iefXOW > form > div:nth-child(3) > button.styles__Container-sc-8aee437d-0.hKAuKZ',
    ).click();

    cy.contains(/contrato_de_prestação_de_serviços.docx/i).should('be.visible');
    cy.contains(/pendente/i).should('be.visible');
  });
});
