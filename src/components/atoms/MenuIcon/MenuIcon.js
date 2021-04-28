import { Button } from './MenuIcon.styles'
import { ReactComponent as Hamburger } from 'assets/images/icon-hamburger.svg'
import { ReactComponent as CloseMenuIcon } from 'assets/images/icon-close-menu.svg'
import { useAppContext } from 'context'

const MenuIcon = () => {
  const { isMenuOpen, toggleMenu } = useAppContext()

  return (
    <Button
      aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
      onClick={toggleMenu}
    >
      {isMenuOpen ? (
        <CloseMenuIcon aria-hidden="true" />
      ) : (
        <Hamburger aria-hidden="true" />
      )}
    </Button>
  )
}

export default MenuIcon
