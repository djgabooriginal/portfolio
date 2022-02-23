import React, { useEffect, useState } from 'react'
import { Box, Main, Video, Image, Tab, Tabs, Grommet } from 'grommet'
import { Lightbox } from 'react-modal-image'
import { theme } from '../../theme'
import './styles.css'
import { AppHeader } from '../AppHeader'
import { Cover } from '../Cover'
import { VirtualSets } from './VirtualSets'
import { Streaming } from './Streaming'
import { VirtualSetsVideos } from './VirtualSetsVideos'
import { Videos } from './Videos'

// List of images
import capture from '../../assets/images/capture.jpg'
import entrada from '../../assets/images/Entrada.png'
import forum from '../../assets/images/forum.jpg'
import invitados from '../../assets/images/Invitados.png'
import lobby from '../../assets/images/lobby.png'
import medicina from '../../assets/images/medicina.png'
import tv from '../../assets/images/tv.jpeg'

export const PortfolioPage = (props) => {
  const videos = []
  const [popUp, setPopUp] = useState(false)
  const [open, setOpen] = useState()
  const [image, setImage] = useState()
  const closeLightbox = () => {
    setPopUp(!popUp)
  }
  const mapModal = () => {
    return (
      <Lightbox
        medium={image}
        large={image}
        alt="Hello World!"
        onClose={() => closeLightbox()}
      />
    )
  }
  console.log(popUp)
  return (
    <div>
      <AppHeader />
      <Cover alt />
      {popUp && mapModal()}
      <Tabs>
        <Tab title="Set Virtuales">
          <Box pad="medium">
            <VirtualSets open={setPopUp} imgUrl={image} setImage={setImage} />
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
