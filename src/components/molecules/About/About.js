import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper'
import styled, { css } from 'styled-components'
import Paragraph from 'components/atoms/Paragraph/Paragraph'
import { screen } from 'styles/Screen'
import data from 'data/data'
import { useAppContext } from 'context'
import Reward from 'components/molecules/Reward/Reward'
const Wrapper = styled(ViewWrapper)`
  padding: 2.5rem 1.5rem;
`

export const Heading = styled.h2`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;

  ${screen.desktop(css`
    font-size: 1.25rem;
  `)};
`

const About = () => {
  const { rewards } = useAppContext()
  return (
    <Wrapper>
      <Heading>About this project</Heading>
      <Paragraph>{data.project_details.text1}</Paragraph>
      <Paragraph>{data.project_details.text2}</Paragraph>
      {rewards.slice(1).map(reward => (
        <Reward key={reward.id} {...reward} />
      ))}
    </Wrapper>
  )
}

export default About
