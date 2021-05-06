import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'

const animateProgress = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 90%;
  }
`

const StyledProgressBar = styled.div`
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
    animation: ${animateProgress} 1s linear;
  }
`
const ProgressBar = ({ raised, total }) => {
  const width = Math.round((raised / total) * 100)

  return <StyledProgressBar width={width >= 100 ? 100 : width} />
}

export default ProgressBar
