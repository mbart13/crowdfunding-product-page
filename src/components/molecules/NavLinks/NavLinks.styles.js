import styled, { css, keyframes } from 'styled-components'
import { screen } from 'styles/Screen'
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper'
import { rgba } from 'polished'

const appear = keyframes`
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
`

export const LinksWrapper = styled(ViewWrapper)`
  display: ${(props) => (props.showMenu ? 'block' : 'none')};
  list-style-type: none;
  margin: 2.25rem 0 0;
  padding: 0;
  z-index: 10;
  animation: ${appear} 0.3s ease-out;

  ${screen.desktop(css`
    display: flex;
    background-color: transparent;
    border: none;
    margin: 0;
    animation: none;
  `)}
`

export const StyledNavLink = styled.li`
  padding: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.125rem;
    text-decoration: none;
    font-weight: 500;

    :hover,
    :focus {
      text-decoration: underline;
    }

    ${screen.desktop(css`
      color: ${({ theme }) => theme.colors.white};
      font-size: 0.9375rem;
    `)}
  }

  :focus a {
    outline: none;
  }

  :not(:last-child) {
    border-bottom: ${({ theme }) =>
      `1px solid ${rgba(theme.colors.lighterBlack, 0.1)}`};
  }

  ${screen.desktop(css`
    padding: 0;

    :not(:last-child) {
      margin-right: 2rem;
    }
  `)}
`
