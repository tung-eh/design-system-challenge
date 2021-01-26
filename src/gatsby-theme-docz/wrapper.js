import React from 'react'
import { ThemeProvider, Preflight } from '@xstyled/styled-components'

import OriginalWrapper from 'gatsby-theme-docz/src/wrapper'

import theme from '@/theme'

const Wrapper = ({ children, doc }) => {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <OriginalWrapper>{children}</OriginalWrapper>
    </ThemeProvider>
  )
}

export default Wrapper
