import React from 'react'
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
import { FacebookOption } from 'grommet-icons'
import { ReactComponent as Wsp } from '../assets/images/wsp.svg'
import { buttonStyle, card } from './HomeStyles'
import gris from '../assets/videos/gris.mp4'
import vertical from '../assets/videos/grisvertical.mp4'
import './styles.css'
import { useEffect, useState } from 'react/cjs/react.development'

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
      color={customTheme.global.colors.babyPodwer}
      size="medium"
    />
  )
  const renderWspIcon = () => (
    <Wsp fill={customTheme.global.colors.babyPodwer} />
  )

  useEffect(() => {
    setBackground(
      window.screen.orientation.type.includes('landscape') ? gris : vertical,
    )
  }, [window.screen.orientation])

  return (
    <Grommet background="light-4" theme={customTheme}>
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
                margin="20px"
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
              </Grid>
            </CardBody>
          </Card>
        </div>
      </div>
    </Grommet>
  )
}

export default Home
