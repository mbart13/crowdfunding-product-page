import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.cyan};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  border-radius: 5rem;
  padding: 1.125rem 2.625rem;
  font-weight: bold;
  transition: background-color 0.2s linear;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.darkCyan};
    cursor: pointer;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${({ theme }) => rgba(theme.colors.lighterBlack, 0.5)};
      :hover,
      :focus {
        cursor: not-allowed;
        background: ${({ theme }) => rgba(theme.colors.lighterBlack, 0.5)};
      }
    `}

  ${({ small }) =>
    small &&
    css`
      font-size: 0.875rem;
      padding: 0.9375rem 2rem;
      }
    `}
`
