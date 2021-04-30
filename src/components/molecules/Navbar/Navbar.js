import { Navbar, InnerWrapper } from './Navbar.styles'
import Logo from 'components/atoms/Logo/Logo'
import MenuIcon from 'components/atoms/MenuIcon/MenuIcon'
import NavLinks from '../Navlinks/Navlinks'
import { useAppContext } from 'context'

const Navigation = () => {
  const { isMenuOpen } = useAppContext()
  return (
    <Navbar isMenuOpen={isMenuOpen}>
      <InnerWrapper>
        <Logo />
        <MenuIcon />
      </InnerWrapper>
      <NavLinks />
    </Navbar>
  )
}

export default Navigation
