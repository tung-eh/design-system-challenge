/** @jsx jsx */
import { jsx } from 'theme-ui'
import { x } from '@xstyled/styled-components'
export * from 'gatsby-theme-docz/src/components/Headings'

export const h2 = props => (
  <x.h2 fontSize="3xl" fontWeight="bold" my={4} {...props}>
    <a
      href={`#${props.id}`}
      sx={{
        color: 'inherit',
        textDecoration: 'none',
        ':hover': {
          textDecoration: 'underline',
        },
      }}
    >
      {props.children}
    </a>
  </x.h2>
)
