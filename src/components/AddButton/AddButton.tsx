import { MaterialIcons } from "@expo/vector-icons"
import { Button } from "@react-native-material/core"

interface AddButtonProps {
  onPress: () => void
}

const AddButton = ({ onPress = () => {} }: AddButtonProps) => {
  return (
    <Button
      leading={<MaterialIcons name="my-library-add" color="white" size={18} />}
      title="Add quote"
      onPress={onPress}
    />
  )
}

export default AddButton
