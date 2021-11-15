import { Avatar,Heading, Main, Paragraph } from 'grommet'
import React, { useState } from 'react'
import { theme } from '../theme'
import { getWindowDimensions } from '../utils/dimensions'
import { AppHeader } from './AppHeader'
import { resumeContainer, titleContainer } from './InfoStyles'

export const Cover = (props) => {
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
    </div>
  )
}
