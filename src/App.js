import React from 'react'
import { Routes, Route, HashRouter, Link, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import { InfoPage } from './components/Info'
import { PortfolioPage } from './components/Portfolio'

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
