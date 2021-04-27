import styled from 'styled-components'
import Logo from 'components/atoms/Logo/Logo'
import MenuIcon from 'components/atoms/MenuIcon/MenuIcon'
import NavLinks from '../Navlinks/Navlinks'

const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem;
`

const Navbar = () => {
  return (
    <>
      <NavHeader>
        <Logo />
        <MenuIcon />
      </NavHeader>
      <NavLinks />
    </>
  )
}

export default Navbar
