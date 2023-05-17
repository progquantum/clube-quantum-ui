import { render } from '@testing-library/react';

import { Button } from '.';
import { ProviderMock } from '../../../__test__/__mocks__/provider';

describe('Button', () => {
  it('should render the button text', () => {
    const buttonText = 'Click me';
    const { getByText } = render(
      <ProviderMock>
        <Button>{buttonText}</Button>
      </ProviderMock>,
    );
    expect(getByText(buttonText)).toBeInTheDocument();
  });

  it('should render the correct button variant primary', () => {
    const { getByRole } = render(
      <ProviderMock>
        <Button variant="primary" />
      </ProviderMock>,
    );
    expect(getByRole('button')).toHaveStyle('background-color: #0C61FF');
  });

  it('should render the correct button variant secondary', () => {
    const { getByRole } = render(
      <ProviderMock>
        <Button variant="secondary" />
      </ProviderMock>,
    );
    expect(getByRole('button')).toHaveStyle('background-color: transparent');
  });

  it('should render the correct button variant transparent', () => {
    const { getByRole } = render(
      <ProviderMock>
        <Button variant="transparent" />
      </ProviderMock>,
    );
    expect(getByRole('button')).toHaveStyle('background-color: transparent');
  });

  it('should render the correct button variant danger', () => {
    const { getByRole } = render(
      <ProviderMock>
        <Button variant="danger" />
      </ProviderMock>,
    );
    expect(getByRole('button')).toHaveStyle('background-color: #E12B2B');
  });
});
