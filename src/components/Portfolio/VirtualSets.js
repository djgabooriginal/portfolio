import React from 'react'
import './styles.css'


// List of images
import capture from '../../assets/images/capture.jpg'
import entrada from '../../assets/images/Entrada.png'
import forum from '../../assets/images/forum.jpg'
import invitados from '../../assets/images/Invitados.png'
import lobby from '../../assets/images/lobby.png'
import medicina from '../../assets/images/medicina.png'
import tv from '../../assets/images/tv.jpeg'

export const VirtualSets = (props) => {
  const images = [
    { image: capture, id: 'capture' },
    { image: entrada, id: 'entrada' },
    { image: forum, id: 'forum' },
    { image: invitados, id: 'invitados' },
    { image: lobby, id: 'lobby' },
    { image: medicina, id: 'medicina' },
    { image: tv, id: 'tv' },
  ]

  const imagesList = images.map((img) => {
    return <img src={img.image} key={img.id} />
  })

  return <div className="image-list">{imagesList}</div>
}
