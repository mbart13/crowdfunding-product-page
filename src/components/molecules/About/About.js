import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled(ViewWrapper)`
  padding: 2.5rem 1.5rem;
`

export const Heading = styled.h2`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
`

export const Paragraph = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 1.5rem;
`

const About = () => {
  return (
    <Wrapper>
      <Heading>About this project</Heading>
      <Paragraph>
        {' '}
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </Paragraph>
      <Paragraph>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </Paragraph>
    </Wrapper>
  )
}

export default About
