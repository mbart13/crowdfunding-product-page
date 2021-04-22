import React from 'react'

import { GlobalStyles } from 'styles/GlobalStyles'
import { theme } from './styles/Theme'
import styled, { ThemeProvider } from 'styled-components'
import Button from 'components/atoms/Button/Button'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.alabaster};
  min-height: 100vh;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <GlobalStyles />
      <Button text="Back this project" />
    </Wrapper>
  </ThemeProvider>
)
export default App
