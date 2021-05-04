import { Wrapper, StatsNumber, StatsDescription } from './StatsItem.styles'
import CountUp from 'react-countup'

const StatsItem = ({ number, description, prefix }) => {
  return (
    <Wrapper>
      <StatsNumber>
        <CountUp
          separator=","
          prefix={prefix ? prefix : ''}
          end={number}
          duration={1}
        />
      </StatsNumber>
      <StatsDescription>{description}</StatsDescription>
    </Wrapper>
  )
}

export default StatsItem
