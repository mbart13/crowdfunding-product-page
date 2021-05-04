import { useEffect, useRef, useCallback } from 'react'
import ReactDOM from 'react-dom'

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
  z-index: -1;
  overflow-y: auto;
  display: grid;
  place-items: center;
  padding: 7.5rem 1.5rem;
  transition: opacity 0.5s ease-out, z-index 0.5s ease-out;

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
      /* overflow-y: auto; */
    `}
`

const ModalOverlay = ({ children }) => {
  const { isMenuOpen, isPledgeModalOpen, toggleModal } = useAppContext()
  const modalRef = useRef()

  const closeModal = e => {
    if (modalRef.current === e.target) {
      toggleModal()
    }
  }

  const handleEsc = useCallback(
    event => {
      if (event.keyCode === 27) {
        toggleModal()
      }
    },
    [toggleModal]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [handleEsc])

  return ReactDOM.createPortal(
    <Wrapper
      onClick={closeModal}
      ref={modalRef}
      showMenu={isMenuOpen}
      showModal={isPledgeModalOpen}
    >
      {children}
    </Wrapper>,
    document.getElementById('modal-container')
  )
}

export default ModalOverlay
