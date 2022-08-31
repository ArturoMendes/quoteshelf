import { MaterialIcons } from "@expo/vector-icons"
import { AppBar, Text } from "@react-native-material/core"
import React from "react"

interface HeaderProps {
  onMenuPress?: () => void
  onSearchPress?: () => void
}

const Header = ({
  onMenuPress = () => {},
  onSearchPress = () => {},
}: HeaderProps) => {
  return (
    <AppBar
      title={
        <Text variant="h6" color="white">
          Quoteshelf
        </Text>
      }
      centerTitle={true}
      leading={
        <MaterialIcons
          name="my-library-books"
          color="white"
          size={32}
          onPress={onMenuPress}
        />
      }
      trailing={
        <MaterialIcons
          name="search"
          color="white"
          size={32}
          onPress={onSearchPress}
        />
      }
      style={{
        width: "100%",
      }}
    />
  )
}

export default Header
