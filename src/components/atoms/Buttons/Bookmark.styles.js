import styled, { css } from 'styled-components'
import { StyledButton } from './Button.styles'
import { rgba } from 'polished'
import { screen } from 'styles/Screen'

export const StyledBookmark = styled(StyledButton)`
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  padding: 0.9375rem 0;
  transition: color 0.2s linear;
  color: transparent;

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  #circle,
  #path {
    transition: fill 0.2s linear;
  }

  :hover,
  :focus {
    background-color: ${({ theme }) => rgba(theme.colors.lighterBlack, 0.05)};
    cursor: pointer;
  }

  :focus #circle {
    /* fill: ${({ theme }) => theme.colors.gray}; */
  }

  ${({ bookmarked }) =>
    bookmarked &&
    css`
      #circle {
        fill: ${({ theme }) => theme.colors.darkCyan};
      }
      #path {
        fill: ${({ theme }) => theme.colors.white};
      }
    `}

  ${screen.desktop(css`
    background-color: ${({ theme }) => rgba(theme.colors.lighterBlack, 0.05)};
    color: ${({ theme }) => theme.colors.gray};
    padding-left: 4.5rem;
    padding-right: 1.5rem;
    width: unset;
    height: unset;

    ${({ bookmarked }) =>
      bookmarked &&
      css`
        color: ${({ theme }) => theme.colors.darkCyan};
      `}
  `)}
`
