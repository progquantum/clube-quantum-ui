import { fakerPT_BR as faker } from '@faker-js/faker';
import { cpf } from 'cpf-cnpj-validator';

describe('CreatePersonalAccount', () => {
  it(' should create an personal account', () => {
    cy.visit('http://localhost:3001/signup/?invite-code=YCQTEV');

    cy.get('[data-cy="personal-link"]').click();

    const generatedCPF = cpf.generate();
    cy.get('[data-cy="cpf-input"]').type(generatedCPF);

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
    const zipCode = '29065580';
    cy.get('[data-cy="signup_zipCode"]').type(zipCode);

    cy.get('[data-cy="signup_street"]').should(
      'have.value',
      'Rua Ormandino Benezath',
    );

    cy.get('[data-cy="signup_neighborhood"]').should(
      'have.value',
      'Mata da Praia',
    );
    cy.get('[data-cy="signup_number"]').type('123');
    cy.get('[data-cy="signup_complement"]').type('12B');
    cy.get('[data-cy="signup_city"]').should('have.value', 'Vitória');
    cy.get('[data-cy="signup_state"]').should('have.value', 'ES');
    cy.get('[data-cy="signup_country"]').should('have.value', 'Brasil');
    cy.get('@nextStepButton').click();

    // Formulário de informações pessoais
    const fullName = faker.person.fullName();
    cy.get('[data-cy="signup_name"]').type(fullName);

    const birthDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
    cy.get('[data-cy="signup_birthDate"]').type(
      new Intl.DateTimeFormat('pt-BR').format(birthDate),
    );

    const email = faker.internet.email({ firstName: fullName });

    cy.get('[data-cy="signup_email"]').type(email);
    cy.get('[data-cy="signup_confirmEmail"]').type(email);
    cy.get('[data-cy="signup_password"]').type('12345678');
    cy.get('[data-cy="signup_confirmPassword"]').type('12345678');
    cy.get('[data-cy="signup_terms"]').check();
    cy.get('@nextStepButton').click();

    // Formulário de Cartão de Crédito
    cy.get('[data-cy="signup_fullName"]').type(fullName);
    cy.get('[data-cy="signup_creditCardNumber"]').type('4916069268475522');
    cy.get('[data-cy="signup_expirationDate"]').type('122030');

    const cvv = faker.finance.creditCardCVV();
    cy.get('[data-cy="signup_cvv"]').type(cvv);

    cy.get('@nextStepButton').click();

    cy.get('[data-cy="signup_bankAccountDocument"]').should(
      'have.text',
      'Conta CPF',
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
