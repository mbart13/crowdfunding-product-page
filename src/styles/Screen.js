import { css } from 'styled-components'

export const screen = {
  desktop: (...args) => {
    return css`
      @media screen and (min-width: 39.375rem) {
        ${args};
      }
    `
  },
}
