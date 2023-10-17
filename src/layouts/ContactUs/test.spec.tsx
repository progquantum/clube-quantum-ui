/* eslint-disable no-promise-executor-return */
import { render, screen } from '@testing-library/react';

import { ContactUsPage } from '.';
import { ProviderMock } from '../../../__test__/__mocks__/provider';

describe('ContactUsPage', () => {
  test('renders form fields', () => {
    render(
      <ProviderMock>
        <ContactUsPage />
      </ProviderMock>,
    );

    expect(screen.getByPlaceholderText('Nome completo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Telefone')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Digite a sua mensagem'),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument();
  });
});
