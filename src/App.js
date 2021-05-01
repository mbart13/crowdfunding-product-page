import { GlobalStyles } from 'styles/GlobalStyles'
import { theme } from './styles/Theme'
import styled, { ThemeProvider } from 'styled-components'
import Header from 'components/organisms/Header/Header'
import Project from 'components/organisms/Project/Project'
import Footer from 'components/molecules/Footer/Footer'
import ModalOverlay from 'components/molecules/Modal/Modal'
import { AppProvider } from './context.js'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.alabaster};
  min-height: 100vh;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Wrapper>
          <GlobalStyles />
          <Header />
          <Project />
          <Footer />
          <ModalOverlay />
        </Wrapper>
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
