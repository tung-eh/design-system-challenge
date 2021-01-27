import { x } from '@xstyled/styled-components'
import React from 'react'

import Icon from './Icon'

// Copy from https://gist.github.com/gordonbrander/2230317
const generateId = () =>
  '_' +
  Math.random()
    .toString(36)
    .substr(2, 9)

const Input = ({
  label,
  id,
  size = 'md',
  error,
  helpText,
  startIcon,
  endIcon,
  fullWidth,
  multiline,
  ...props
}) => {
  const InputComponent = multiline ? x.textarea : x.input

  const sizeProps = {
    sm: {
      p: 3,
    },
    md: {
      p: 4,
    },
    lg: {
      p: 5,
    },
  }[size]

  const colorProps = error
    ? {
        color: 'red-500',
        focusWithinColor: 'red-500',
      }
    : {
        color: 'true-gray-500',
        focusWithinColor: 'true-gray-700',
      }

  const inputId = id || generateId()
  return (
    <x.div
      display="flex"
      flexDirection="column"
      alignItems={fullWidth ? 'stretch' : 'start'}
      {...colorProps}
      mb={3}
    >
      <x.label htmlFor={inputId} fontSize="lg" mb={1}>
        {label}
      </x.label>
      <x.div position="relative" display="flex" alignItems="center">
        <InputComponent
          borderWidth
          borderRadius="lg"
          outline="none"
          borderColor={colorProps.color}
          focusBorderColor={colorProps.focusWithinColor}
          w={fullWidth && '100%'}
          {...sizeProps}
          pl={startIcon && 12}
          pr={endIcon && 12}
          id={inputId}
          {...props}
        />
        {startIcon && (
          <Icon name={startIcon} position="absolute" left="1rem" w={6} h={6} />
        )}
        {endIcon && (
          <Icon name={endIcon} position="absolute" right="1rem" w={6} h={6} />
        )}
      </x.div>
      {helpText && (
        <x.span
          fontSize="sm"
          color={error ? 'red-400' : 'true-gray-400'}
          mt={1}
        >
          {helpText}
        </x.span>
      )}
    </x.div>
  )
}

export default Input
