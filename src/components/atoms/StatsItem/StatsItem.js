import { Wrapper, StatsNumber, StatsDescription } from './StatsItem.styles'

const StatsItem = ({ number, description }) => {
  return (
    <Wrapper>
      <StatsNumber>{number}</StatsNumber>
      <StatsDescription>{description}</StatsDescription>
    </Wrapper>
  )
}

export default StatsItem
