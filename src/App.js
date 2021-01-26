import { ThemeProvider, Preflight } from '@xstyled/styled-components'
import React from 'react'

import Button from './atoms/Button'
import Icon from './atoms/Icon'
import Input from './atoms/Input'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <Button>Click me</Button>
      <Input />
      <Icon name="local_grocery_store" color="yellow-500" w={10} h={10} />
    </ThemeProvider>
  )
}

export default App
