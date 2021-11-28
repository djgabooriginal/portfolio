import { Grommet } from 'grommet'
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import { InfoPage } from './components/Info'
import { PortfolioPage } from './components/Portfolio/Portfolio'
import { customTheme } from './theme'

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  return (
    <Grommet theme={customTheme} themeMode={darkMode ? 'dark' : 'light'}>
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/gallery" element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </Grommet>
  )
}

export default App
