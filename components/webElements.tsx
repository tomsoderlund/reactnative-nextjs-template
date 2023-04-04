import React from 'react'
import { Text } from 'react-native'

export const H1 = (props: any): React.ReactElement => <Heading {...props} level={1} />
export const H2 = (props: any): React.ReactElement => <Heading {...props} level={2} />
export const H3 = (props: any): React.ReactElement => <Heading {...props} level={3} />

export const Heading = (props: any): React.ReactElement => {
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
