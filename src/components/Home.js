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
import { theme } from '../theme'
import { FacebookOption } from 'grommet-icons'
import { ReactComponent as Wsp } from '../assets/images/wsp.svg'
import { buttonStyle, card } from './HomeStyles'
import './styles.css'

const submitHandle = (url) => {
  window.location.replace(`${url}`)
}


const Home = props => {
  const navigate = useNavigate()
  const renderFbIcon = () => (
    <FacebookOption color={theme.global.colors.babyPodwer} size="medium" />
  )
  const renderWspIcon = () => (
    <Wsp fill={theme.global.colors.babyPodwer} />
  )
  return (
    <Grommet theme={theme}>
      <div className="video-background">
        <video autoPlay muted loop id="myVideo">
          <source
            src={'http://techslides.com/demos/sample-videos/small.webm'}
            type="video/mp4"
          />
        </video>
        <div className="card-container">
          <Card background="rgba(64, 67, 78,0.6)" style={card}>
            <CardHeader style={{ flexDirection: 'column' }}>
              <Heading color={theme.global.colors.babyPodwer} size="medium" level={2}>
                {'Gabriel Martinez'}
              </Heading>
              <div>
                <Heading
                  color={theme.global.colors.babyPodwer}
                  size="medium"
                  level={4}
                >
                  {'Events Manager'}
                </Heading>
              </div>
            </CardHeader>
            <CardBody>
              <Button
                style={buttonStyle}
                hoverIndicator="light-1"
                primary
                active
                label="Portfolio"
                onClick={()=> navigate('/portfolio')}
              />
              <Button
                style={buttonStyle}
                primary
                active
                label="Info"
                hover={theme.global.colors.wine}
                onClick={()=> navigate('/info')}
              />
              <Grid
                justify="center"
                gap="small"
                margin="20px"
                columns="80px"
                rows="xsmall"
              >
                <Button
                  style={{backgroundColor: 'transparent'}}
                  plain
                  icon={renderFbIcon()}
                  onClick={() => submitHandle('https://www.facebook.com/groups/recursosvmix')}
                  primary
                />
                <Button
                  style={{backgroundColor: 'transparent'}}
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
