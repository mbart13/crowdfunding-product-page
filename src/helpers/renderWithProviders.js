import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/Theme'
import { AppProvider } from '../context'

export const renderWithProviders = children => {
  return render(
    <ThemeProvider theme={theme}>
      <AppProvider>{children}</AppProvider>
    </ThemeProvider>
  )
}
