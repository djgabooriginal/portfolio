
import React from 'react'
import { Anchor, Header, Nav } from 'grommet'
import { theme } from '../theme'
import './styles.css'
import { AppHeader } from './AppHeader'
import { Cover } from './Cover'

export const PortfolioPage = props => {
  return(
  <div className="full-page">
    <AppHeader />
    <Cover />
  </div>
  )
}