import { render, screen, waitFor } from '@testing-library/react';

import DashboardPosPage from 'pages/dashboard-pos';

import { setup as login } from '../../../__test__/__mocks__/login';
import { ProviderMock } from '../../../__test__/__mocks__/provider';

describe('DashboardPos page', () => {
  beforeAll(async () => await login());

  it('should render properly without errors or warnings', async () => {
    // Spy on console.error and console.warn
    const errorSpy = jest.spyOn(console, 'error');
    const warnSpy = jest.spyOn(console, 'warn');

    render(
      <ProviderMock>
        <DashboardPosPage />
      </ProviderMock>,
    );

    // Wait for the Dashboard component to render
    await waitFor(() => {
      const heading = screen.getByRole('heading', {
        name: /Você está no estabelecimento/i,
      });

      expect(heading).toBeInTheDocument();
    });

    // Assert that no errors or warnings were thrown during rendering
    expect(errorSpy).not.toHaveBeenCalled();
    expect(warnSpy).not.toHaveBeenCalled();
  });
});
