import { useEffect, useRef, useCallback, useState } from 'react'
import ReactDOM from 'react-dom'
import FocusTrap from 'focus-trap-react'
import { Wrapper } from './Modal.styles'

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

  // useEffect(() => {
  //   const modal = document.getElementById('modal-container')
  //   const focusableElementsString =
  //     'input:not([disabled]), button:not([disabled]), *[tabindex="0"]'

  //   let focusableElements = modal.querySelectorAll(focusableElementsString)
  //   console.log(focusableElements)
  // }, [])

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
      <FocusTrap>
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
      </FocusTrap>
    ),
    document.getElementById('modal-container')
  )
}

export default Modal
