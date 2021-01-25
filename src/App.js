import {
  defaultTheme,
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'

import Button from './atoms/Button'
import Icon from './atoms/Icon'
import Input from './atoms/Input'

const theme = {
  ...defaultTheme,
  // Customize theme here
}

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
