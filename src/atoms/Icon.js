import * as MdIcons from 'react-icons/md'
import styled from '@xstyled/styled-components'

const capitalize = (name) => {
  return name
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

const Svg = styled.svgBox``

const Icon = ({ name, ...props }) => {
  console.log(`Md${capitalize(name)}`)
  const Component = MdIcons[`Md${capitalize(name)}`]

  return <Svg as={Component} {...props} />
}

export default Icon
