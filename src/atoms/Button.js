import { x } from '@xstyled/styled-components'
import React from 'react'

import Icon from './Icon'

const Button = ({
  color: colorProp = 'default',
  variant,
  size = 'md',
  startIcon,
  endIcon,
  children,
  ...props
}) => {
  const colors = {
    default: {
      bg: 'true-gray-200',
      hoverBg: 'true-gray-400',
      text: 'black',
    },
    primary: {
      bg: 'blue-500',
      hoverBg: 'blue-600',
    },
    secondary: {
      bg: 'blue-gray-500',
      hoverBg: 'blue-gray-600',
    },
    success: {
      bg: 'green-500',
      hoverBg: 'green-600',
    },
    warning: {
      bg: 'yellow-500',
      hoverBg: 'yellow-600',
    },
    danger: {
      bg: 'red-500',
      hoverBg: 'red-600',
    },
  }[colorProp]

  const baseProps = {
    borderRadius: 'md',
    bg: colors.bg,
    hoverBg: colors.hoverBg,
    color: colors.text || 'white',
    borderWidth: true,
    borderColor: 'transparent',
    boxShadow: 'md',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    disabledPointerEvents: 'none',
    disabledOpacity: 0.75,
  }

  const sizeProps = {
    sm: {
      py: 2,
      px: 3,
    },
    md: {
      py: 3,
      px: 4,
    },
    lg: {
      py: 4,
      px: 5,
    },
  }[size]

  const variantProps =
    {
      outline: {
        bg: 'white',
        hoverBg: colors.bg,
        disabledBg: 'white',
        borderColor: colors.bg,
        color: colors.text || colors.bg,
        hoverColor: colors.text || 'white',
      },
      text: {
        borderWidth: 0,
        px: 0,
        py: 0,
        boxShadow: 'none',
        color: colors.text || colors.bg,
        hoverColor: colors.text || colors.hoverBg,
        bg: 'transparent',
        hoverBg: 'transparent',
      },
    }[variant] || {}

  return (
    <x.button {...baseProps} {...sizeProps} {...variantProps} {...props}>
      {startIcon && <Icon name={startIcon} mr={2} />}
      {children}
      {endIcon && <Icon name={endIcon} ml={2} />}
    </x.button>
  )
}

export default Button
