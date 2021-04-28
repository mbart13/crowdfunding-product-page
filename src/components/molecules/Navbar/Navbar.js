import { Navbar, InnerWrapper } from './Navbar.styles'
import Logo from 'components/atoms/Logo/Logo'
import MenuIcon from 'components/atoms/MenuIcon/MenuIcon'
import NavLinks from '../NavLinks/NavLinks'
import { useAppContext } from 'context'

const Navigation = () => {
  const { isMenuOpen } = useAppContext()
  return (
    <Navbar>
      <InnerWrapper isMenuOpen={isMenuOpen}>
        <Logo />
        <MenuIcon />
      </InnerWrapper>
      <NavLinks />
    </Navbar>
  )
}

export default Navigation
