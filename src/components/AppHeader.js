import React from 'react'
import { Anchor, Header, Nav } from 'grommet'
import { customTheme } from '../theme'
import './styles.css'

export const AppHeader = (props) => {
  const { darkMode } = props
  const anchorColor = darkMode
    ? customTheme.global.colors.yellow.dark
    : customTheme.global.colors.yellow.light
  const headerColor = darkMode
    ? customTheme.global.colors.gray.dark
    : customTheme.global.colors.gray.light
  return (
    <div className="full-page">
      <Header background={headerColor} pad="small">
        <Nav direction="row">
          <Anchor color={anchorColor} label="Home" href="/portfolio/" />
          <Anchor color={anchorColor} label="Info" href="/portfolio/info" />
          <Anchor
            color={anchorColor}
            label="Gallery"
            href="/portfolio/gallery"
          />
        </Nav>
      </Header>
    </div>
  )
}
