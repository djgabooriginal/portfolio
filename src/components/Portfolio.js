import React from 'react'
import { Anchor, Box, Header, Main, Nav, Video } from 'grommet'
import { theme } from '../theme'
import './styles.css'
import { AppHeader } from './AppHeader'
import { Cover } from './Cover'

export const PortfolioPage = (props) => {
  const videos = []
  const listAnimalsBoxes = videos.map((vid) => (
    <Box align="center" pad="large">
      <Video {...props}>
        <source src="small.mp4" type="video/mp4" />
        <source src={vid} type="video/mp4" />
      </Video>
    </Box>
  ))
  return (
    <div className="full-page">
      <AppHeader />
      <Cover />
      <div className="main-class">
        <Main></Main>
      </div>
    </div>
  )
}
