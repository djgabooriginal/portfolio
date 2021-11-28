import {
  Avatar,
  Box,
  Distribution,
  Heading,
  Image,
  Main,
  Paragraph,
} from 'grommet'
import React, { useEffect, useState } from 'react'
import { customTheme } from '../theme'
import { getWindowDimensions } from '../utils/dimensions'
import { AppHeader } from './AppHeader'
import { resumeContainer, titleContainer } from './InfoStyles'

import coverImage from '../assets/images/cover.png'
import { Channel, Console } from 'grommet-icons'

export const Cover = (props) => {
  const { darkMode } = props
  const [size, setSize] = useState()
  const [ iconSize, setIconSize ] = useState()
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )
  const fontColor = darkMode
    ? customTheme.global.colors.yellow.dark
    : customTheme.global.colors.yellow.light

  const width = windowDimensions.width

  const setNewSize = () => {
    switch (true) {
      case width <= 400:
        setSize('large')
        setIconSize('small')
        break;
      case 401 < width && width <= 800:
        setSize('2xl')
        setIconSize('medium')
        break;
      default:
        setSize('3xl')
        setIconSize('xlarge')
        break
    }

  }

  

  useEffect(() => {
    setNewSize()
  }, [width])


  return (
    <Box fill>
      <div className="profile-title">
        <Channel color={fontColor} size={iconSize} />
        <Heading level={1} size={size} color={fontColor}>
          Gabriel Martinez
        </Heading>
        <Heading level={3} size={size} color={fontColor}>
          Director de Eventos, Productor Musical y Audiovisual, Streaming,
          Mapping, VMix, Diseñador de escenarios
        </Heading>
      </div>
      <Image
        style={{ width: '100%', padding: 0, margin: 0, top: 0, left: 0 }}
        fill
        src={coverImage}
      />
    </Box>
  )
}
