import styled from 'styled-components'
import { rgba } from 'polished'

const ProgressBar = styled.div`
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
    width: 90%;
    height: 100%;
    border-radius: 2.0938rem;
  }
`

export default ProgressBar
