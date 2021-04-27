import { useState } from 'react'

import { ReactComponent as Hamburger } from 'assets/images/icon-hamburger.svg'
import { ReactComponent as CloseMenuIcon } from 'assets/images/icon-close-menu.svg'
import styled from 'styled-components'

const Button = styled.button`
  background: none;
  border: none;
  svg {
    cursor: pointer;
  }
`

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Button
      aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
      onClick={() => setIsOpen((prevState) => !prevState)}
    >
      {isOpen ? <CloseMenuIcon /> : <Hamburger />}
    </Button>
  )
}

export default MenuIcon
