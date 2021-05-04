import styled, { css } from 'styled-components'
import { screen } from 'styles/Screen'

export const Wrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  max-height: 0;
  padding: 0;
  opacity: 0;
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
  pointer-events: none;

  h3 {
    font-size: 0.875rem;
    text-align: center;
    font-weight: normal;
    margin-bottom: 1rem;

    ${screen.desktop(css`
      font-size: 0.9375rem;
    `)};
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

  ${({ selected }) =>
    selected &&
    css`
      max-height: 50rem;
      padding: 1.5rem;
      opacity: 1;
      pointer-events: auto;
    `}
`

export const FormWrapper = styled.form`
  display: flex;
  gap: 1rem;
  justify-content: center;

  ${screen.desktop(css`
    width: 100%;
    justify-content: flex-end;
    flex-basis: 75%;
    flex-wrap: wrap;
  `)}

  > :nth-child(1) {
    flex: 0 1 45%;
    max-width: 6.25rem;
  }

  > :nth-child(2) {
    flex: 1 1 55%;
    padding: 0.9375rem 1.5625rem;
    font-size: 0.875rem;
    max-width: 7.1875rem;
  }
`
