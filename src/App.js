import { GlobalStyles } from 'styles/GlobalStyles'
import { theme } from './styles/Theme'
import styled, { ThemeProvider } from 'styled-components'
import Header from 'components/organisms/Header/Header'
import Project from 'components/organisms/Project/Project'
import Footer from 'components/molecules/Footer/Footer'
import ModalOverlay from 'components/molecules/Modals/ModalOverlay'
import { useAppContext } from 'context'
import PledgeModal from 'components/molecules/Modals/PledgeModal'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.alabaster};
  min-height: 100vh;
`

const App = () => {
  const { isPledgeModalOpen } = useAppContext()

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyles />
        <Header />
        <Project />
        <Footer />
        {isPledgeModalOpen && <PledgeModal />}
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
