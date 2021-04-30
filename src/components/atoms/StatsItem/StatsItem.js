import { Wrapper, StatsNumber, StatsDescription } from './StatsItem.styles'
import CountUp from 'react-countup'

const StatsItem = ({ number, description }) => {
  return (
    <Wrapper>
      <StatsNumber>
        <CountUp
          separator=","
          prefix={number.includes('$') ? '$' : ''}
          end={number.includes('$') ? +number.slice(1) : +number}
          duration={1}
        />
        {number}
      </StatsNumber>
      <StatsDescription>{description}</StatsDescription>
    </Wrapper>
  )
}

export default StatsItem
