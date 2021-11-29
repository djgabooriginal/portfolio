import React from 'react'
import './styles.css'

// List of images
import aguardiente from '../../assets/videos/aguardiente.mp4'
import biografia from '../../assets/videos/biografia.mp4'
import blc from '../../assets/videos/blc.mp4'
import concierto from '../../assets/videos/concierto.mp4'
import davad from '../../assets/videos/davad.mp4'
import empresarial from '../../assets/videos/empresarial.mp4'
import fiorella from '../../assets/videos/fiorella.mp4'
import gym from '../../assets/videos/gym.mp4'
import invitacion from '../../assets/videos/invitacion.mp4'
import mapping from '../../assets/videos/mapping.mp4'
import mym from '../../assets/videos/mym.mp4'
import post from '../../assets/videos/post.mp4'
import trade from '../../assets/videos/trade.mp4'
import trailer from '../../assets/videos/trailer.mp4'

export const Videos = (props) => {
  const videos = [
    { video: aguardiente, id: 'aguardiente' },
    { video: biografia, id: 'biografia' },
    { video: blc, id: 'blc' },
    { video: fiorella, id: 'fiorella' },
    { video: gym, id: 'gym' },
    { video: invitacion, id: 'invitacion' },
    { video: mapping, id: 'mapping' },
    { video: mym, id: 'mym' },
    { video: post, id: 'post' },
    { video: trade, id: 'trade' },
    { video: trailer, id: 'trailer' },

  ]

  const videoList = videos.map((v) => {
    return (
      <video width="250" height="150" controls>
        <source src={v.video} type="video/mp4" />
      </video>
    )
  })

  return  <div className="image-list">{videoList}</div>
}
