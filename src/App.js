import React from 'react'
import { Box, Grommet } from 'grommet'
import { theme } from './theme'

function App() {
  return (
    <Grommet theme={theme}>
      <Box align="center" pad="large" />
    </Grommet>
  )
}

export default App
