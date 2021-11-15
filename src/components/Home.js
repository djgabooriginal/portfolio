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
import { Chat, FacebookOption, LinkedinOption } from 'grommet-icons'

import { buttonStyle, card } from './HomeStyles'
import './styles.css'



const Home = props => {
  const navigate = useNavigate()
  const renderFbIcon = () => (
    <FacebookOption color={theme.global.colors.charcoal} size="medium" />
  )
  const renderLinkIcon = () => (
    <LinkedinOption color={theme.global.colors.charcoal} size="medium" />
  )

  const renderWspIcon = () => (
    <Chat color={theme.global.colors.charcoal} size="medium" />
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
          <Card background="rgba(250,250,250,0.6)" style={card}>
            <CardHeader style={{ flexDirection: 'column' }}>
              <Heading color={theme.global.colors.richBlack} size="medium" level={2}>
                {'Gabriel Martinez'}
              </Heading>
              <div>
                <Heading
                  color={theme.global.colors.richBlack}
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
                onClick={()=> navigate('/info')}
              />
              <Grid
                justify="center"
                gap="small"
                margin="20px"
                columns="64px"
                rows="xsmall"
              >
                <Button
                  plain
                  icon={renderFbIcon()}
                  onClick={() => {}}
                  primary
                />
                <Button
                  plain
                  icon={renderLinkIcon()}
                  onClick={() => {}}
                  primary
                />
                <Button
                  plain
                  icon={renderWspIcon()}
                  onClick={() => {}}
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
