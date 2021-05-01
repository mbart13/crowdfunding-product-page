import styled, { css } from 'styled-components'
import { useAppContext } from 'context'
import { screen } from 'styles/Screen'
import ModalContent from './ModalContent'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: -1;
  overflow-y: auto;
  display: grid;
  place-items: center;
  padding: 7.5rem 1.5rem;

  ${({ showMenu }) =>
    showMenu &&
    css`
      opacity: 1;
      z-index: 0;
      overflow-y: initial;

      ${screen.desktop(css`
        opacity: 0;
        z-index: -1;
      `)}
    `}

  ${({ showModal }) =>
    showModal &&
    css`
      opacity: 1;
      z-index: 0;
      overflow-y: auto;
    `}
`

const ModalOverlay = () => {
  const { isMenuOpen, isModalOpen } = useAppContext()
  return (
    <Wrapper showMenu={isMenuOpen} showModal={isModalOpen}>
      <ModalContent></ModalContent>
    </Wrapper>
  )
}

export default ModalOverlay
