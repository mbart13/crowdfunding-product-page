import styled, { css } from 'styled-components'
import ProjectDesc from 'components/molecules/ProjectDesc/ProjectDesc'
import Stats from 'components/molecules/Stats/Stats'
import { screen } from 'styles/Screen'
import About from 'components/molecules/About/About'

const MainWrapper = styled.main`
  padding: 0 1.5rem;
  color: ${({ theme }) => theme.colors.black};
  margin-top: -3.625rem;

  ${screen.desktop(css`
    margin: -5.75rem auto;
    max-width: 45.625rem;
  `)};
`

const Project = ({ handleOpenModal }) => {
  return (
    <MainWrapper>
      <ProjectDesc handleOpenModal={handleOpenModal} />
      <Stats />
      <About handleOpenModal={handleOpenModal} />
    </MainWrapper>
  )
}

export default Project
