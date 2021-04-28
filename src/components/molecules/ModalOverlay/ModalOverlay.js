import styled, { css } from 'styled-components'
import { useAppContext } from 'context'
import { screen } from 'styles/Screen'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: -10;

  ${({ showMenu }) =>
    showMenu &&
    css`
      opacity: 1;
      z-index: 0;
    `}

  ${screen.desktop(css`
    opacity: 0;
    z-index: -10;
  `)}
`

const ModalOverlay = () => {
  const { isMenuOpen } = useAppContext()
  return <Wrapper showMenu={isMenuOpen} />
}

export default ModalOverlay
