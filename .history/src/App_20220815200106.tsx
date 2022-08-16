import { ThemeProvider } from 'styled-components'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <h1>Hello World!</h1>
    </ThemeProvider>
  )
}

