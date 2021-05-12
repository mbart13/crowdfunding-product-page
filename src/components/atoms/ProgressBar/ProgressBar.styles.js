import styled, { keyframes, css } from 'styled-components'
import { rgba } from 'polished'

const animateProgress = width => keyframes`
  0% {
    width: 0;
  }

  100% {
    width: ${width}%;
  }
`

export const StyledProgressBar = styled.div`
  position: relative;
  border-radius: 2.0938rem;
  background-color: ${({ theme }) => rgba(theme.colors.lighterBlack, 0.05)};
  height: 0.75rem;
  width: 100%;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.cyan};
    width: ${props => `${props.width}%`};
    height: 100%;
    border-radius: 2.0938rem;
    animation: ${props =>
      css`
        ${animateProgress(props.width)} 1s linear
      `};
  }
`
