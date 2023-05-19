describe('CancelContracts', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.contains('Fazer Login').click();
    cy.url().should('include', '/signin');

    cy.get('input[placeholder*="CPF/CNPJ"]').type('48518013860');
    cy.get('input[placeholder*="Senha"]').type('12345678');
    cy.contains('Login').click();
    cy.url().should('include', '/dashboard');
  });

  it(' should do a request of plan cancellation', () => {
    cy.get('[data-cy="sidebar_my-contracts"]').click();

    cy.url().should('include', '/my-contracts');

    cy.get('[data-cy="accordion"]').click();

    cy.contains(/contrato quantum smart/i);

    cy.get('[data-cy="contract"]').first().click();

    cy.contains(/contrato quantum smart/i);

    cy.get('[data-cy="requestCancellationButton"]').click();

    cy.get('[data-cy="justificationTextArea"]').type('Test test test');

    cy.get('[data-cy="requestCancellationButton"]').click();
  });
});
