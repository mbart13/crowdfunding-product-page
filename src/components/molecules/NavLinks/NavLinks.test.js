import { screen } from '@testing-library/react'
import NavLinks from './NavLinks'
import { renderWithProviders } from 'helpers/renderWithProviders'

describe('NavLinks component', () => {
  it('renders navigation links', () => {
    renderWithProviders(<NavLinks />)
    const links = screen.getAllByRole('listitem', { hidden: true })
    expect(links).toHaveLength(3)
  })
})
