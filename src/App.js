import { GlobalStyles } from 'styles/GlobalStyles'
import { theme } from './styles/Theme'
import styled, { ThemeProvider } from 'styled-components'
import Button from 'components/atoms/Buttons/Button'
import Bookmark from 'components/atoms/Buttons/Bookmark'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.alabaster};
  min-height: 100vh;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyles />
        <div>
          <Button label="Back this project" />
          <Bookmark />
        </div>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
