import styled, { css } from 'styled-components'
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper'
import Paragraph from 'components/atoms/Paragraph/Paragraph'
import { screen } from 'styles/Screen'

export const ProductName = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.875rem;

  ${screen.desktop(css`
    font-size: 1rem;
  `)};
`

export const Wrapper = styled(ViewWrapper)`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.875rem;
  position: relative;
  opacity: ${({ quantity }) => (quantity === 0 ? 0.5 : 1)};
  pointer-events: ${({ quantity }) => (quantity === 0 ? 'none' : 'auto')};

  :focus-within {
    border: ${({ theme }) => `2px solid ${theme.colors.cyan}`};
  }

  ${({ selected }) =>
    selected &&
    css`
      ${Description}:focus {
        box-shadow: unset;
      }
      border: ${({ theme }) => `2px solid ${theme.colors.cyan}`};
    `}
`

export const Description = styled.div`
  padding: 1.5rem;
  background: none;
  border: none;
  text-align: left;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius};

  :focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.cyan};
  }

  :hover {
    cursor: pointer;
  }

  &:hover ${ProductName}, &:focus ${ProductName} {
    color: ${({ theme }) => theme.colors.cyan};
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  &:focus ${ProductName} {
    color: ${({ theme }) => theme.colors.cyan};
  }

  &:focus {
    outline: none;
  }
`

export const NameWrapper = styled.div`
  font-size: 0.875rem;

  ${screen.desktop(css`
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    font-size: 1rem;
    justify-content: flex-start;
    width: unset;
  `)};
`

export const StyledParagraph = styled(Paragraph)`
  ${({ noReward }) =>
    noReward &&
    css`
      margin-bottom: 0;
    `}

  ${screen.desktop(css`
    padding-left: 0;
    padding-left: 3rem;
    margin-bottom: 0;
  `)}
`

export const PledgeAmount = styled.p`
  color: ${({ theme }) => theme.colors.cyan};
  font-weight: 500;
`

export const Quantity = styled.p`
  span:first-child {
    color: ${({ theme }) => theme.colors.black};
    font-size: 2rem;
    font-weight: 700;
    margin-right: 0.5rem;
  }

  span:last-child {
    font-size: 0.9375rem;
    font-weight: normal;
    vertical-align: super;
  }

  span:first-child {
    font-size: 1.125rem;
  }
  span:last-child {
    vertical-align: initial;
  }
  ${screen.desktop(css`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
  `)};
`

export const QuantityButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  Button {
    max-width: 9.875rem;
  }

  ${screen.desktop(css`
    flex-direction: row;
    justify-content: space-between;
  `)};
`
