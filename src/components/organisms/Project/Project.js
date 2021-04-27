import styled, { css } from 'styled-components'
import ProjectDescription from 'components/molecules/ProjectDescription/ProjectDescription'
import Stats from 'components/molecules/Stats/Stats'
import { screen } from 'styles/Screen'
import About from 'components/molecules/About/About'

const MainWrapper = styled.main`
  padding: 0 1.5rem;
  color: ${({ theme }) => theme.colors.black};
  margin-top: -3.625rem;

  ${screen.desktop(css`
    margin: 0 auto;
    max-width: 45.625rem;
  `)};
`

const Project = () => {
  return (
    <MainWrapper>
      <ProjectDescription />
      <Stats />
      <About />
    </MainWrapper>
  )
}

export default Project
