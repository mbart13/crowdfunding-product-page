import { StyledProgressBar } from './ProgressBar.styles'

const ProgressBar = ({ raised, total }) => {
  const width = Math.round((raised / total) * 100)

  return <StyledProgressBar width={width >= 100 ? 100 : width} />
}

export default ProgressBar
