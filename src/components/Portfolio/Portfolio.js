import React from 'react'
import { Box, Main, Video, Image, Tab, Tabs, Grommet } from 'grommet'
import { theme } from '../../theme'
import './styles.css'
import { AppHeader } from '../AppHeader'
import { Cover } from '../Cover'
import { VirtualSets } from './VirtualSets'
import { Streaming } from './Streaming'
import { VirtualSetsVideos } from './VirtualSetsVideos'
import { Videos } from './Videos'

export const PortfolioPage = (props) => {
  const videos = []
  return (
    <div>
    <AppHeader />
    <Cover alt />
    <Tabs >
      <Tab title="Set Virtuales">
        <Box pad="medium">
          <VirtualSets />
        </Box>
      </Tab>
      <Tab title="Set Virtuales (Videos)">
        <Box pad="medium">
          <VirtualSetsVideos />
        </Box>
      </Tab>
      <Tab title="Producción/Streaming">
        <Box pad="medium">
          <Streaming />
        </Box>
      </Tab>
      <Tab title="Videos">
        <Box pad="medium">
          <Videos />
        </Box>
      </Tab>
    </Tabs>
    </div>
  )
}
