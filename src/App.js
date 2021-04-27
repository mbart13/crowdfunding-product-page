import { GlobalStyles } from 'styles/GlobalStyles'
import { theme } from './styles/Theme'
import styled, { ThemeProvider } from 'styled-components'
import Header from 'components/organisms/Header/Header'
import Project from 'components/organisms/Project/Project'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.alabaster};
  min-height: 100vh;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyles />
        <Header />
        <Project />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
