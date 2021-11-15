
import React from 'react'
import { Anchor, Header, Nav } from 'grommet'
import { theme } from '../theme'
import './styles.css'

export const AppHeader = props => {
  return(
    <div className="full-page">
    <Header background={theme.global.colors.charcoal} pad="medium">
    <Nav direction="row">
      <Anchor color={theme.global.colors.babyPodwer} label="Home" href="/portofolio" />
      <Anchor color={theme.global.colors.babyPodwer} label="Info" href="/portofolio/info" />
    </Nav>
  </Header>
  </div>
  )
}