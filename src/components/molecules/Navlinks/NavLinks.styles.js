import styled, { css, keyframes } from 'styled-components'
import { screen } from 'styles/Screen'
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper'

const appear = keyframes`
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
`

export const LinksWrapper = styled(ViewWrapper)`
  display: ${props => (props.showMenu ? 'block' : 'none')};
  list-style-type: none;
  margin: 2.25rem 0 0;
  padding: 0;
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
    position: relative;
    /* :hover,
    :focus {
      text-decoration: underline;
    } */

    ::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.black};
      bottom: -3px;
      left: 0px;
      transform: scale(0);
      transition: all 0.3s ease-in-out;
      transform: scaleX(0);

      ${screen.desktop(css`
        background-color: ${({ theme }) => theme.colors.white};
      `)};
    }

    :hover::after {
      transform: scale(1);
    }

    :focus {
      outline: 2px dashed ${({ theme }) => theme.colors.red};
      outline-offset: 2px;
    }

    &:focus:not(:focus-visible) {
      outline: none;
    }

    ${screen.desktop(css`
      color: ${({ theme }) => theme.colors.white};
      font-size: 0.9375rem;
    `)}
  }

  ${screen.desktop(css`
    padding: 0;

    :not(:last-child) {
      margin-right: 2rem;
    }
  `)}
`
