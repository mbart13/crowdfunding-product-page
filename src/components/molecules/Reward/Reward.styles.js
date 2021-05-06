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
`

export const Description = styled.div`
  padding: 1.5rem;
  text-align: left;
  outline: none;

  :focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.cyan};
  }
`

export const NameWrapper = styled.div`
  font-size: 0.875rem;
  margin-bottom: 1.5rem;

  ${screen.desktop(css`
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    font-size: 1rem;
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
