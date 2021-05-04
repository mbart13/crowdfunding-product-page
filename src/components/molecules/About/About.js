import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper'
import styled, { css } from 'styled-components'
import Paragraph from 'components/atoms/Paragraph/Paragraph'
import { screen } from 'styles/Screen'
import ProductList from 'components/organisms/ProductList/ProductList'
import data from 'data/data'

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
  return (
    <Wrapper>
      <Heading>About this project</Heading>
      <Paragraph>{data.project_details.text1}</Paragraph>
      <Paragraph>{data.project_details.text2}</Paragraph>
      <ProductList />
    </Wrapper>
  )
}

export default About
