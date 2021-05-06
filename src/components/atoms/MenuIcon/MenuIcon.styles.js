import styled, { css } from 'styled-components'
import { screen } from 'styles/Screen'

export const Button = styled.button`
  padding: 0;
  background: none;
  border: none;
  position: absolute;
  right: 0;

  :focus {
    outline: 2px dashed ${({ theme }) => theme.colors.red};
    outline-offset: 4px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  svg {
    cursor: pointer;
  }

  ${screen.desktop(css`
    display: none;
  `)}
`
