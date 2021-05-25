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

export const Wrapper = styled.div`
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
