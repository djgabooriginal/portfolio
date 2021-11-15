import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './components/Home'
import { InfoPage } from './components/Info'
import { PortfolioPage } from './components/Portfolio'

function App() {
  return (
    <HashRouter basename="/">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
    </HashRouter>
  )
}

export default App
