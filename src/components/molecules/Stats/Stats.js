import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper'
import styled, { css } from 'styled-components'
import StatsItem from 'components/atoms/StatsItem/StatsItem'
import ProgressBar from 'components/atoms/ProgressBar/ProgressBar'
import { screen } from 'styles/Screen'
import { useAppContext } from 'context'

const Wrapper = styled(ViewWrapper)`
  padding: 2rem 1.5625rem 2.5rem;
  text-align: center;

  ${screen.desktop(css`
    padding: 3rem;
  `)};
`

const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 2rem;

  ${screen.desktop(css`
    display: flex;
    justify-content: flex-start;
  `)};
`

const Stats = () => {
  const { stats } = useAppContext()
  return (
    <Wrapper>
      <ListWrapper>
        <StatsItem
          prefix="$"
          number={stats.backed}
          description="of $100,000 backed"
        />
        <StatsItem number={stats.backers} description="total backers" />
        <StatsItem number={stats.days_left} description="days left" />
      </ListWrapper>
      <ProgressBar raised={stats.backed} total={stats.required_amount} />
    </Wrapper>
  )
}

export default Stats
