
import React from 'react'
import { Anchor, Header, Nav } from 'grommet'
import { customTheme } from '../theme'
import './styles.css'

export const AppHeader = props => {
  return(
    <div className="full-page">
    <Header background={customTheme.global.colors.charcoal} pad="medium">
    <Nav direction="row">
      <Anchor color={customTheme.global.colors.babyPodwer} label="Home" href="/portfolio/" />
      <Anchor color={customTheme.global.colors.babyPodwer} label="Info" href="/portfolio/info" />
      <Anchor color={customTheme.global.colors.babyPodwer} label="Gallery" href="/portfolio/gallery" />
    </Nav>
  </Header>
  </div>
  )
}