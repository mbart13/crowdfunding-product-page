import styled, { css } from 'styled-components'
import { screen } from 'styles/Screen'

export const Wrapper = styled.li`
  position: relative;

  ${screen.desktop(css`
    flex: 1 1 33.33%;
    text-align: left;
    &:not(:first-child) {
      ${screen.desktop(css`
        margin-left: 2rem;
      `)}
    }
  `)};

  &:not(:last-child)::after {
    content: '';
    display: block;
    height: 0.0625rem;
    width: 5rem;
    background-color: rgba(0, 0, 0, 0.15);
    margin: 1.5rem auto;

    ${screen.desktop(css`
      height: 100%;
      width: 0.0625rem;
      margin: 0;
      position: absolute;
      top: 0;
      right: 0;
    `)};
  }
`

export const StatsNumber = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5625rem;
`
export const StatsDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray};
`
