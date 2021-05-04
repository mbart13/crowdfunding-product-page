import { GlobalStyles } from 'styles/GlobalStyles'
import { theme } from './styles/Theme'
import styled, { ThemeProvider } from 'styled-components'
import Header from 'components/organisms/Header/Header'
import Project from 'components/organisms/Project/Project'
import Footer from 'components/molecules/Footer/Footer'
import Modal from 'components/organisms/Modal/Modal'
import { useAppContext } from 'context'
import BackingCard from 'components/molecules/BackingCard/BackingCard'
import ConfirmationModal from 'components/molecules/ConfirmationCard/ConfirmationCard'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.alabaster};
  min-height: 100vh;
`

const App = () => {
  const {
    isBackingCardShown,
    closeBackingCard,
    isConfirmationCardShown,
    closeConfirmationCard,
  } = useAppContext()

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyles />
        <Header />
        <Project />
        {isBackingCardShown && (
          <Modal handleCloseModal={closeBackingCard}>
            <BackingCard handleCloseModal={closeBackingCard} />
          </Modal>
        )}
        {isConfirmationCardShown && (
          <Modal handleCloseModal={closeConfirmationCard}>
            <ConfirmationModal handleCloseModal={closeConfirmationCard} />
          </Modal>
        )}
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
