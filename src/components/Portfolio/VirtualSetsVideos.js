import React from 'react'
import './styles.css'

// List of images
import aguardiente from '../../assets/videos/aguardiente.mp4'
import auditorio from '../../assets/videos/auditorio.mp4'
import awards from '../../assets/videos/awards.mp4'
import biografia from '../../assets/videos/biografia.mp4'
import blc from '../../assets/videos/blc.mp4'
import blcstage from '../../assets/videos/blcstage.mp4'
import concierto from '../../assets/videos/concierto.mp4'
import davad from '../../assets/videos/davad.mp4'
import empresarial from '../../assets/videos/empresarial.mp4'
import fiorella from '../../assets/videos/fiorella.mp4'
import fut from '../../assets/videos/fut.mp4'
import fut2 from '../../assets/videos/fut2.mp4'
import gym from '../../assets/videos/gym.mp4'
import huella from '../../assets/videos/huella.mp4'
import invitacion from '../../assets/videos/invitacion.mp4'
import mapping from '../../assets/videos/mapping.mp4'
import me from '../../assets/videos/ME.mp4'
import mym from '../../assets/videos/mym.mp4'
import navidad from '../../assets/videos/navidad.mp4'
import post from '../../assets/videos/post.mp4'
import promo1 from '../../assets/videos/promo1.mp4'
import promo2 from '../../assets/videos/promo2.mp4'
import setdj from '../../assets/videos/setdj.mp4'
import trade from '../../assets/videos/trade.mp4'
import trailer from '../../assets/videos/trailer.mp4'

export const VirtualSetsVideos = (props) => {
  const videos = [
    { video: aguardiente, id: 'aguardiente' },
    { video: auditorio, id: 'auditorio' },
    { video: awards, id: 'awards' },
    { video: biografia, id: 'biografia' },
    { video: blc, id: 'blc' },
    { video: blcstage, id: 'blcstage' },
    { video: concierto, id: 'concierto' },
    { video: davad, id: 'davad' },
    { video: empresarial, id: 'empresarial' },
    { video: fiorella, id: 'fiorella' },
    { video: fut, id: 'fut' },
    { video: fut2, id: 'fut2' },
    { video: gym, id: 'gym' },
    { video: huella, id: 'huella' },
    { video: invitacion, id: 'invitacion' },
    { video: mapping, id: 'mapping' },
    { video: me, id: 'me' },
    { video: mym, id: 'mym' },
    { video: navidad, id: 'navidad' },
    { video: post, id: 'post' },
    { video: promo1, id: 'promo1' },
    { video: promo2, id: 'promo2' },
    { video: setdj, id: 'setdj' },
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
