import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from "./styles/theme"
import GlobalStyles from "./styles/global"
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Menu } from './pages/Menu'
import { Home } from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Menu />
    </ThemeProvider>
  </React.StrictMode>,
)
