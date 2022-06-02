import { render } from '@testing-library/react'

import { HomePage } from '.'

describe('Home page', () => {
  it('should render a heading', () => {
    const { getByRole } = render(<HomePage />)

    const heading = getByRole('heading', {
      name: /home/i
    })

    expect(heading).toBeInTheDocument()
  })
})
