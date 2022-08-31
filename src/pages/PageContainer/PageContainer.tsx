import React from "react"
import { StyleSheet, View } from "react-native"

interface PageContainerProps {
  children?: React.ReactNode | React.ReactNode[]
}

const PageContainter = ({ children }: PageContainerProps) => {
  return <View style={style.container}>{children}</View>
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default PageContainter
