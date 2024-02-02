import { fakerPT_BR as faker } from '@faker-js/faker';
import { cnpj } from 'cpf-cnpj-validator';

describe('CreateBusinessAccount', () => {
  it(' should create an business account', () => {
    cy.visit('http://localhost:3001/signup/?invite=YCQTEV');

    // Seleciona o tipo de cadastro de Pessoa Jurídica
    cy.get('[data-cy="business-link"]').click();

    const generatedCNPJ = cnpj.generate();
    cy.get('[data-cy="cnpj-input"]').type(generatedCNPJ);

    cy.get('[data-cy="next-step-button"]').as('nextStepButton');

    cy.get('@nextStepButton').click();

    cy.get('[data-cy="phone-input"]').type(faker.phone.number('11 9####-####'));

    cy.get('@nextStepButton').click();

    const verificationCode = String(
      faker.number.bigInt({ min: 111111, max: 999999 }),
    );

    cy.get('[data-cy="pin-code-cell"]').each((item, index) => {
      const verificationCodeToArray = verificationCode.split('');

      cy.wrap(item).as('pinCodeInput');
      cy.get('@pinCodeInput').type(verificationCodeToArray[index]);
    });

    // Mocka a resposta da rota check-code
    cy.intercept('PUT', '/phones/check-code', {
      statusCode: 200,
    }).as('checkCode');

    cy.get('@nextStepButton').click();

    cy.wait('@checkCode');

    // Formulário de endereço
    cy.get('[data-cy="zip_code"]').type('38413-246');
    cy.get('[data-cy="business_street"]').should('not.equal', '');
    cy.get('[data-cy="neighborhood"]').should('not.equal', '');
    cy.get('[data-cy="state"]').should('not.equal', '');
    cy.get('[data-cy="country"]').should('not.equal', '');

    const buildingNumber = faker.location.buildingNumber();
    cy.get('[data-cy="number"]').type(buildingNumber);

    cy.get('[data-cy="complement"]').type('12B');

    cy.get('@nextStepButton').click();

    // Formulário de informações pessoais
    const companyName = faker.company.name();
    cy.get('[data-cy="company_name"]').type(companyName);

    const email = faker.internet.email({ firstName: companyName });
    cy.get('[data-cy="email"]').type(email);
    cy.get('[data-cy="email_confirmation"]').type(email);
    cy.get('[data-cy="password"]').type('12345678');
    cy.get('[data-cy="password_confirmation"]').type('12345678');
    cy.get('[data-cy="terms"]').check();
    cy.get('@nextStepButton').click();

    // Formulário de Cartão de Crédito
    const fullName = faker.person.fullName();
    cy.get('[data-cy="signup_fullName"]').type(fullName);

    cy.get('[data-cy="signup_creditCardNumber"]').type('4916069268475522');

    cy.get('[data-cy="signup_expirationDate"]').type('122030');

    const cvv = faker.finance.creditCardCVV();
    cy.get('[data-cy="signup_cvv"]').type(cvv);

    cy.get('@nextStepButton').click();

    cy.get('[data-cy="signup_bankAccountDocument"]').should(
      'have.text',
      'Conta CNPJ',
    );

    cy.get('@nextStepButton').click();

    const plan = 'planStart';
    cy.get(`[data-cy="${plan}"]`).click();

    cy.get('@nextStepButton').click();

    cy.get('[data-cy="signup_planName"]').should('have.text', 'Quantum Start');

    cy.get('@nextStepButton').click();

    cy.get('[data-cy="signup_goToDashboard"]').click();

    cy.contains(/quantum start/i);
  });
});
