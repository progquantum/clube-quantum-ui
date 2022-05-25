import { render } from '@testing-library/react'

import Home from 'pages'

describe('Home page', () => {
  it('should render a heading', () => {
    const { getByRole } = render(<Home />)

    const heading = getByRole('heading', {
      name: /welcome to next\.js!/i
    })

    expect(heading).toBeInTheDocument()
  })
})
