import React from 'react'
import {
  Routes,
  Route,
  HashRouter,
  Link,
  BrowserRouter,
} from 'react-router-dom'
import Home from './components/Home'
import { InfoPage } from './components/Info'
import { PortfolioPage } from './components/Portfolio'

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/gallery" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
