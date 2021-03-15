import React from 'react'
import { Text } from 'react-native'

export const H1 = (props) => <Heading {...props} level={1} />
export const H2 = (props) => <Heading {...props} level={2} />
export const H3 = (props) => <Heading {...props} level={3} />

export const Heading = (props) => {
  const { children, level, ...otherProps } = props
  return (
    <Text
      {...otherProps}
      accessibilityRole='header'
      aria-level={level}
    >
      {children}
    </Text>
  )
}
