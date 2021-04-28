import styled, { css } from 'styled-components'
import { screen } from 'styles/Screen'

export const Button = styled.button`
  padding: 0;
  background: none;
  border: none;
  svg {
    cursor: pointer;
  }

  ${screen.desktop(css`
    display: none;
  `)}
`
