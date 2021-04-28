import { LinksWrapper, StyledNavLink } from './NavLinks.styles'
import { useAppContext } from 'context'

const links = ['About', 'Discover', 'Get Started']

const NavLinks = () => {
  const { isMenuOpen } = useAppContext()
  return (
    <LinksWrapper as="ul" showMenu={isMenuOpen}>
      {links.map((link, index) => (
        <StyledNavLink key={index}>
          <a href="/">{link}</a>
        </StyledNavLink>
      ))}
    </LinksWrapper>
  )
}

export default NavLinks
