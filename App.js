import { StyleSheet, View } from "react-native"
import { NativeRouter } from "react-router-native"
import Main from "./src/pages/Main"

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Main />
      </View>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    width: "100%",
  },
})
