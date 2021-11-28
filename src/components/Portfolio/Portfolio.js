import React from 'react'
import { Box, Main, Video, Image, Tab, Tabs, Grommet } from 'grommet'
import { theme } from '../../theme'
import './styles.css'
import { AppHeader } from '../AppHeader'
import { Cover } from '../Cover'
import { VirtualSets } from './VirtualSets'
import { Streaming } from './Streaming'

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
    <div>
    <AppHeader />
    <Cover />
    <Tabs >
      <Tab title="Set Virtuales">
        <Box pad="medium">
          <VirtualSets />
        </Box>
      </Tab>
      <Tab title="Producción/Streaming">
        <Box pad="medium">
          <Streaming />
        </Box>
      </Tab>
    </Tabs>
    </div>
  )
}
