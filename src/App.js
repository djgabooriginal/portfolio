import React from 'react'
import { Box, Card, CardHeader, Grommet } from 'grommet'
import { theme } from './theme'

import './App.css'

function App() {
  return (
    <Grommet theme={theme}>
      <Box pad="large" gap="medium" height="large" width="medium">
        <div className="card-container">
        <Card >
          <CardHeader>
            {'Gabriel Martinez – DJ Gabo'}
          </CardHeader>
        </Card>
        </div>
      </Box>
    </Grommet>
  )
}

export default App
