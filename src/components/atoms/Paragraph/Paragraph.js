import styled, { css } from 'styled-components'
import { screen } from 'styles/Screen'

const Paragraph = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 1.5rem;

  ${screen.desktop(css`
    font-size: 1rem;
  `)};
`

export default Paragraph
