import styled, { css } from 'styled-components'
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper'
import Input from 'components/atoms/Input/Input'
import Paragraph from 'components/atoms/Paragraph/Paragraph'
import Button from 'components/atoms/Buttons/Button'
import { screen } from 'styles/Screen'

export const Wrapper = styled(ViewWrapper)`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.875rem;
  position: relative;
`

export const Description = styled.div`
  padding: 1.5rem;
  ${screen.desktop(css`
    padding-bottom: 0;
  `)};
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`

export const NameWrapper = styled.div`
  font-size: 0.875rem;

  ${screen.desktop(css`
    display: flex;
    gap: 1rem;
  `)};
`

export const StyledParagraph = styled(Paragraph)`
  ${screen.desktop(css`
    padding-left: 3rem;
  `)}
`

export const ProductName = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.875rem;
`
export const PledgeAmount = styled.p`
  color: ${({ theme }) => theme.colors.cyan};
`

export const Quantity = styled.p`
  span {
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.125rem;
    font-weight: 700;
  }
  ${screen.desktop(css`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
  `)};
`

export const UserInput = styled.div`
  padding: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.15);

  h3 {
    font-size: 0.875rem;
    text-align: center;
    font-weight: normal;
    margin-bottom: 1rem;
  }

  ${screen.desktop(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      flex-grow: 1;
      flex-basis: 50%;
      text-align: left;
      margin-bottom: 0;
    }
  `)};
`
export const ButtonInputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  ${screen.desktop(css`
    width: 100%;
    justify-content: flex-end;
    flex-basis: 50%;
  `)}
`

export const StyledInput = styled(Input)`
  flex: 0 1 45%;
  max-width: 6.25rem;
`

export const StyledButton = styled(Button)`
  flex: 1 1 55%;
  padding: 0.9375rem 1.5625rem;
  font-size: 0.875rem;
  max-width: 7.1875rem;
`
