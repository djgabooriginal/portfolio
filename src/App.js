import React from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './components/Home'
import { InfoPage } from './components/Info'
import { PortfolioPage } from './components/Portfolio'

function App() {
  return (
    <HashRouter basename="/">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </HashRouter>
  )
}

export default App
