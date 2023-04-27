import { render, screen, waitFor } from '@testing-library/react';

import Dashboard from 'pages/dashboard';

import { setup as login } from '../../../__test__/__mocks__/login';
import { ProviderMock } from '../../../__test__/__mocks__/provider';

describe('Dashboard page', () => {
  beforeAll(async () => await login());

  it('should render properly', async () => {
    render(
      <ProviderMock>
        <Dashboard />
      </ProviderMock>,
    );

    await waitFor(() => {
      const heading = screen.getByRole('heading', {
        name: /não fique sozinho nessa!/i,
      });
      expect(heading).toBeInTheDocument();
    });
  });

  it('should render properly without errors or warnings', async () => {
    // Spy on console.error and console.warn
    const errorSpy = jest.spyOn(console, 'error');
    const warnSpy = jest.spyOn(console, 'warn');

    render(
      <ProviderMock>
        <Dashboard />
      </ProviderMock>,
    );

    // Wait for the Dashboard component to render
    await waitFor(() => {
      const heading = screen.getByRole('heading', {
        name: /Não fique sozinho nessa!/i,
      });

      expect(heading).toBeInTheDocument();
    });

    // Assert that no errors or warnings were thrown during rendering
    expect(errorSpy).not.toHaveBeenCalled();
    expect(warnSpy).not.toHaveBeenCalled();
  });
});
