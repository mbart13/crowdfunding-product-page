import React from 'react'

import { GlobalStyles } from 'styles/GlobalStyles'
import { theme } from './styles/Theme'
import styled, { ThemeProvider } from 'styled-components'
import Button from 'components/atoms/Buttons/Buttons'
import { Bookmark } from 'components/atoms/Buttons/Bookmark'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.alabaster};
  min-height: 100vh;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <GlobalStyles />
      <Button label="Back this project"></Button>
      <Button label="Out of Stock" disabled></Button>
      <Bookmark />
    </Wrapper>
  </ThemeProvider>
)
export default App
