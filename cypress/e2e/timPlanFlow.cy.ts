describe('Login', () => {
  it('should login correctly', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Fazer Login').click();
    cy.url().should('include', '/signin');

    cy.get('input[placeholder*="CPF/CNPJ"]').type('485.180.138.60');
    cy.get('input[placeholder*="Senha"]').type('12345678');
    cy.contains('Login').click();
    cy.url().should('include', '/dashboard');

    cy.visit('http://localhost:3000/plano-tim');
    cy.url().should('include', '/plano-tim');

    cy.get(
      '#__next > div.styles__CenterContainer-sc-52b9faae-0.hgsCcE > div > div:nth-child(2) > div:nth-child(3) > button',
    )
      .contains(/contratar agora/i)
      .click();

    cy.get(
      '#__next > div.styles__CenterContainer-sc-52b9faae-0.hgsCcE > div > button',
    )
      .contains(/continuar/i)
      .click();

    cy.get('#newNumber').check();

    cy.get(
      '#__next > div.styles__CenterContainer-sc-52b9faae-0.hgsCcE > div > div.styles__CardContainer-sc-7b4b046e-1.gUKnDJ > div > div:nth-child(2) > select',
    ).select('DDD 65');

    cy.get(
      '#__next > div.styles__CenterContainer-sc-52b9faae-0.hgsCcE > div > div.styles__CardContainer-sc-7b4b046e-1.gUKnDJ > div > div:nth-child(2) > select',
    ).select('98152 0080');

    cy.get(
      '#__next > div.styles__CenterContainer-sc-52b9faae-0.hgsCcE > div > div.styles__ButtonContainer-sc-7b4b046e-13.fmcFZw > button.styles__Button-sc-c45c9b0b-0.eRoLbw',
    )
      .contains(/seguir/i)
      .click();

    cy.get(
      '#__next > div.styles__CenterContainer-sc-52b9faae-0.hgsCcE > div.styles__DetailsContainer-sc-dc19ceb-0.ehmfQT > div.styles__ButtonContainer-sc-dc19ceb-1.dUfMqK > button.styles__Button-sc-c45c9b0b-0.eRoLbw',
    )
      .contains(/seguir/i)
      .click();

    cy.get(
      '#__next > div.styles__CenterContainer-sc-52b9faae-0.hgsCcE > div.styles__PaymentsDetailsContainer-sc-f3e1cce4-0.riOKd > div:nth-child(2) > div:nth-child(4) > input',
    ).type('123');

    cy.get(
      '#__next > div.styles__CenterContainer-sc-52b9faae-0.hgsCcE > div.styles__PaymentsDetailsContainer-sc-f3e1cce4-0.riOKd > div.styles__ButtonContainer-sc-f3e1cce4-1.dJttRj > button.styles__Button-sc-c45c9b0b-0.eRoLbw',
    )
      .contains(/seguir/i)
      .click();
  });
});
