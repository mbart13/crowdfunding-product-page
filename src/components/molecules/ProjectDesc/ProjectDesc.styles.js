import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper'
import styled, { css } from 'styled-components'
import logo from 'assets/images/logo-mastercraft.svg'
import { screen } from 'styles/Screen'

export const Wrapper = styled(ViewWrapper)`
  padding: 3.25rem 1.5rem 0;
  text-align: center;
  margin-bottom: 1.5rem;

  ::after {
    content: '';
    background: url(${logo}) no-repeat;
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const Title = styled.h1`
  font-size: 1.25rem;
  margin: 0 auto 1rem;
  max-width: 15ch;
  line-height: 1.2;

  ${screen.desktop(css`
    font-size: 1.75rem;
    max-width: unset;
  `)}
`

export const Description = styled.p`
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.7;

  ${screen.desktop(css`
    font-size: 1rem;
  `)}
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 2.5rem;

  Button {
    margin-right: 0.5rem;
  }

  ${screen.smallPhone(css`
    justify-content: center;
    Button {
      margin-bottom: 0.8rem;
      padding: 1rem 1.625rem;
      font-size: 0.9rem;
    }
  `)}
`
