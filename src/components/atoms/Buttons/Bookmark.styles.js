import styled from 'styled-components'
import { StyledButton } from './Button.styles'
import { rgba } from 'polished'

export const StyledBookmark = styled(StyledButton)`
  position: relative;
  color: transparent;
  width: 0;
  padding: 0.9375rem 0;
  overflow: auto;
  transition: color 0.2s linear;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
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
    fill: ${({ theme }) => theme.colors.gray};
  }

  &.checked {
    color: ${({ theme }) => theme.colors.darkCyan};
  }

  &.checked #circle {
    fill: ${({ theme }) => theme.colors.darkCyan};
  }

  &.checked #path {
    fill: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 700px) {
    width: unset;
    background-color: ${({ theme }) => rgba(theme.colors.lighterBlack, 0.05)};
    color: ${({ theme }) => theme.colors.gray};
    padding-left: 4.5rem;
    padding-right: 1.5rem;

    svg {
      transform: translateX(0);
    }
  }
`
