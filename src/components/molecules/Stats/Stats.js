import Card from 'components/organisms/Card/Card'
import styled, { css } from 'styled-components'
import StatsItem from 'components/atoms/StatsItem/StatsItem'
import ProgressBar from 'components/atoms/ProgressBar/ProgressBar'
import { screen } from 'styles/Screen'

const Wrapper = styled(Card)`
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

const Stats = () => (
  <Wrapper>
    <ListWrapper>
      <StatsItem number="$89,914" description="of $100,000 backed" />
      <StatsItem number="5,007" description="total backers" />
      <StatsItem number="56" description="days left" />
    </ListWrapper>
    <ProgressBar />
  </Wrapper>
)

export default Stats
