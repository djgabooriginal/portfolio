import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Grid,
  Grommet,
  Heading,
} from 'grommet'
import { customTheme } from '../theme'
import { FacebookOption, LinkedinOption } from 'grommet-icons'
import { ReactComponent as Wsp } from '../assets/images/wsp.svg'
import { buttonStyle, card } from './HomeStyles'
import gris from '../assets/videos/gris.mp4'
import vertical from '../assets/videos/grisvertical.mp4'
import './styles.css'

const submitHandle = (url) => {
  window.location.replace(`${url}`)
}

const Home = (props) => {
  const { darkMode } = props
  const [background, setBackground] = useState(
    window.screen.orientation.type.includes('landscape') ? gris : vertical,
  )

  const fontColor = darkMode
    ? customTheme.global.colors.yellow.dark
    : customTheme.global.colors.yellow.light
  const navigate = useNavigate()
  const renderFbIcon = () => (
    <FacebookOption
      color={customTheme.global.colors.yellow.light}
      size="medium"
    />
  )
  const renderWspIcon = () => (
    <Wsp fill={'#FFDD94'} />
  )

  const renderLinkedIn = () => (
    <LinkedinOption color={customTheme.global.colors.yellow.light} />
  )


  useEffect(() => {
    setBackground(
      window.screen.orientation.type.includes('landscape') ? gris : vertical,
    )
  }, [window.screen.orientation])

  return (
    <Grommet background="light-2" theme={customTheme}>
      <div className="video-background">
        <video autoPlay muted loop id="myVideo">
          <source src={gris} type="video/mp4" />
        </video>
        <div className="card-container">
          <Card background="rgba(64, 67, 78,0.6)" style={card}>
            <CardHeader style={{ flexDirection: 'column' }}>
              <Heading color={fontColor} size="medium" level={2}>
                {'Gabriel Martinez'}
              </Heading>
              <div>
                <Heading color={fontColor} size="medium" level={4}>
                  {'Events Manager'}
                </Heading>
              </div>
            </CardHeader>
            <CardBody>
              <Button
                primary
                active
                label="Portfolio"
                onClick={() => navigate('/gallery')}
                onKeyPress={() => navigate('/gallery')}
              />
              <Button
                primary
                active
                label="Info"
                hover={customTheme.global.colors.wine}
                onClick={() => navigate('/info')}
                onKeyPress={() => navigate('/info')}
              />
              <Grid
                justify="center"
                gap="small"
                margin="10px"
                columns="80px"
                rows="xsmall"
              >
                <Button
                  style={{ backgroundColor: 'transparent' }}
                  plain
                  icon={renderFbIcon()}
                  onClick={() =>
                    submitHandle('https://www.facebook.com/groups/recursosvmix')
                  }
                  primary
                />
                <Button
                  style={{ backgroundColor: 'transparent' }}
                  plain
                  icon={renderWspIcon()}
                  onClick={() => submitHandle('https://wa.me/573008046817')}
                  primary
                />
                <Button
                  style={{ backgroundColor: 'transparent' }}
                  plain
                  icon={renderLinkedIn()}
                  onClick={() =>
                    submitHandle('https://www.linkedin.com/in/gabriel-martinez-zapata-375952232/')
                  }
                  primary
                />
              </Grid>
            </CardBody>
          </Card>
        </div>
      </div>
    </Grommet>
  )
}

export default Home
