import { render, screen } from '@testing-library/react';

import { GuestPage } from '.';
import { ProviderMock } from '../../../__test__/__mocks__/provider';

describe('GuestPage', () => {
  it('renders the guest page correctly', () => {
    const { getByTestId } = render(
      <ProviderMock>
        <GuestPage />
      </ProviderMock>,
    );

    // Verifica se os elementos estão presentes na página
    expect(
      screen.getByText('Você foi convidado para fazer parte do clube quantum.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Falta apenas um passo, se você já possui conta no Banco Um',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Criar minha conta')).toHaveAttribute(
      'href',
      '/signup',
    );

    expect(
      screen.getByText('Ainda não é um cliente Banco Um?'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Conheça as vantagens de ser um cliente Banco Um'),
    ).toBeInTheDocument();
    expect(screen.getByText('Saiba mais')).toHaveAttribute(
      'href',
      '/advantages',
    );

    // Verifica se a imagem do logo está presente
    const logoImage = getByTestId('logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('alt', 'banco um logo');
  });
});
