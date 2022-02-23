import React, { useState } from 'react'
import './styles.css'

// List of images
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

export const Streaming = (props) => {
  const [openPopUp, setPopUp] = useState()
  const { open, setImage } = props
  const popUp = (image) => {
    open(!openPopUp)
    setImage(image)
  }
  const images = [
    { image: confe, id: 'confe' },
    { image: coservatorio, id: 'coservatorio' },
    { image: desayuno, id: 'desayuno' },
    { image: dj, id: 'dj' },
    { image: home, id: 'home' },
    { image: picnic, id: 'picnic' },
    { image: picnic2, id: 'picnic2' },
    { image: pioneer, id: 'pioneer' },
    { image: record, id: 'record' },
    { image: streaming, id: 'streaming' },
    { image: show, id: 'show' },
    { image: stage, id: 'stage' },
    { image: workstation, id: 'workstation' },
  ]

  const imagesList = images.map((img) => {
    return (
      <div onClick={() => popUp(img.image)}>
        <img src={img.image} key={img.id} />
      </div>
    )
  })

  return <div className="image-list">{imagesList}</div>
}
