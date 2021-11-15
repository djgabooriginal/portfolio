import { Avatar,Heading, Main, Paragraph } from 'grommet'
import React, { useState } from 'react'
import { theme } from '../theme'
import { getWindowDimensions } from '../utils/dimensions'
import { AppHeader } from './AppHeader'
import { resumeContainer, titleContainer } from './InfoStyles'

export const InfoPage = (props) => {
  const src =
    'https://scontent.fmex36-1.fna.fbcdn.net/v/t1.6435-9/38790254_153448055537783_248247421786652672_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0-1B2tzUaBwAX_wddMm&tn=InxzIKivSI8X82uQ&_nc_ht=scontent.fmex36-1.fna&oh=85e7381fd63b01ab14e74f41e2fc82a2&oe=61B88AB2'
  const borderSmall = { color: 'white', size: 'medium' }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )
  let size
  let fontSize
  let subtitleSize
  const width = windowDimensions.width
  const parr = `Director de producción de eventos corporativos y de entretenimiento,
  con su experiencia en todos los campos dentro de una produccion
  general, logrará que su evento sea recordado y recomendado.`

  const parr2 = `Basandose en la comunicacion, atencion al cliente, produccion,
  operaciones y marketing aportará un brainstorm creativo, para asi
  lograr los objetivos trazados teniendo en cuenta, su presupuesto,
  target, el mensaje que desea transmitir y las emociones que espera
  despertar. Desarrollando desde el diseño y creacion de escenarios
  virtuales y fisicos, pasando por la logistica del evento, hasta la
  produccion audiovisual de todo el material requerido para el evento
  virtual o presencial.`

  const parr3 = `Experto en montajes de show para artistas,
  musicales, convenciones, eventos empresariales. Especialista en
  video mapping, streaming, DJ y VDJ. Además de ser Comunicador social
  con experiencia en desarrollo de emprendimientos personales
  dedicados a la enseñanza de diversas habilidades, además de locución
  y producción en programas de radio de amplio reconocimiento.`

  const parr4 = `Capacidad para el liderazgo, excelente pedagogía e innovación para
  el desarrollo de nuevas ideas.
  `
  if (width <= 400) {
    size = 'large'
    fontSize = '18px'
    subtitleSize = '16px'
  } else if (400 < width <= 800) {
    size = '3xl'
  } else {
    size = '4xl'
  }

  return (
    <div className="full-page">
      <AppHeader />
      <div className="cover-container">
        <div className="profile-title">
          <Heading
            color={theme.global.colors.babyPodwer}
            style={titleContainer}
            size={fontSize}
          >
            Gabriel Martinez
          </Heading>
        </div>
        <div className="avatar-content">
          <Avatar border={borderSmall} size={size} src={src} />
        </div>
        <div className="profile-resume">
          <Heading
            color={theme.global.colors.babyPodwer}
            style={resumeContainer}
            size={subtitleSize}
          >
            Director de Eventos, Productor Musical y Audiovisual, Streaming,
            Mapping, VMix, Diseñador de escenarios
          </Heading>
        </div>
      </div>
      <div>
        <Main background={theme.global.colors.charcoal} pad="medium">
          <Paragraph size={'20px'} fill>{parr}</Paragraph>
          <Paragraph size={'20px'} fill>{parr2}</Paragraph>
          <Paragraph size={'20px'} fill>{parr3}</Paragraph>
          <Paragraph size={'20px'} fill>{parr4}</Paragraph>
        </Main>
      </div>
    </div>
  )
}
