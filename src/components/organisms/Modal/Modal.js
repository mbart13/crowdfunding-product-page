import { useEffect, useRef, useCallback } from 'react'
import ReactDOM from 'react-dom'

import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  /* opacity: 0;
  z-index: -1; */
  overflow-y: auto;
  display: grid;
  place-items: center;
  padding: 7.5rem 1.5rem;
  transition: opacity 0.5s ease-out, z-index 0.5s ease-out;
`

const Modal = ({ children, handleCloseModal }) => {
  const modalRef = useRef()

  const closeModal = e => {
    if (modalRef.current === e.target) {
      handleCloseModal()
    }
  }

  const handleEsc = useCallback(
    event => {
      if (event.keyCode === 27) {
        handleCloseModal()
      }
    },
    [handleCloseModal]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [handleEsc])

  return ReactDOM.createPortal(
    <Wrapper onClick={closeModal} ref={modalRef}>
      {children}
    </Wrapper>,
    document.getElementById('modal-container')
  )
}

export default Modal
