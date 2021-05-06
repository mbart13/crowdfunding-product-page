import { useEffect, useRef, useCallback, useState } from 'react'
import ReactDOM from 'react-dom'

import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  display: grid;
  place-items: center;
  padding: 5.5rem 1.5rem;

  &.fade-in {
    animation: ${fadeIn} 0.5s forwards ease-in;
  }

  &.fade-out {
    animation: ${fadeOut} 0.5s forwards ease-in;
  }
`

const Modal = ({ children, handleCloseModal, show }) => {
  const [shouldRender, setRender] = useState(show)
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

  useEffect(() => {
    if (show) setRender(true)
  }, [show])

  const onAnimationEnd = () => {
    if (!show) setRender(false)
  }

  return ReactDOM.createPortal(
    shouldRender && (
      <Wrapper
        role="dialog"
        aria-modal="true"
        onAnimationEnd={onAnimationEnd}
        className={show ? 'fade-in' : 'fade-out'}
        onClick={closeModal}
        ref={modalRef}
      >
        {children}
      </Wrapper>
    ),
    document.getElementById('modal-container')
  )
}

export default Modal
