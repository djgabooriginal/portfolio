import React, { useState } from 'react'
import { Box, Tab, Tabs } from 'grommet'
import { Lightbox } from 'react-modal-image'
import { theme } from '../../theme'
import './styles.css'
//Components
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
import confe from '../../assets/images/confe.jpeg'
import coservatorio from '../../assets/images/coservatorio.jpeg'
import desayuno from '../../assets/images/desayuno.jpeg'
import dj from '../../assets/images/dj.jpeg'
import home from '../../assets/images/home.jpeg'
import picnic from '../../assets/images/picnic.jpeg'
import picnic2 from '../../assets/images/picnic2.jpeg'
import pioneer from '../../assets/images/pioneer.jpeg'
import record from '../../assets/images/record.jpeg'
import streaming from '../../assets/images/streaming.jpeg'
import show from '../../assets/images/show.jpeg'
import stage from '../../assets/images/stage.jpeg'
import workstation from '../../assets/images/workstation.jpeg'

export const PortfolioPage = (props) => {
  const videos = []
  const [popUp, setPopUp] = useState(false)
  const [image, setImage] = useState()
  const closeLightbox = () => {
    setPopUp(!popUp)
  }
  const mapModal = () => {
    return (
      <Lightbox
        medium={image}
        large={image}
        alt="Image"
        onClose={() => closeLightbox()}
      />
    )
  }
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
            <VirtualSetsVideos
            />
          </Box>
        </Tab>
        <Tab title="Producción/Streaming">
          <Box pad="medium">
            <Streaming open={setPopUp} imgUrl={image} setImage={setImage} />
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
