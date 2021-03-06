import styled, { css } from 'styled-components'
import { screen } from 'styles/Screen'

export const Navbar = styled.nav`
  padding: 2rem 1.5rem;
  position: ${props => (props.isMenuOpen ? 'fixed' : 'initial')};
  width: 100%;
  z-index: ${props => (props.isMenuOpen ? 1 : 0)};

  ${screen.desktop(css`
    padding: 3rem 1.5rem;
    max-width: 68.75rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: static;
  `)}
`

export const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
