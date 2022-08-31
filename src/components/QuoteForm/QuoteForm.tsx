import { Box, Button, Stack, TextInput } from "@react-native-material/core"
import { useState } from "react"
import { GestureResponderEvent } from "react-native"

interface QuoteFormProps {
  onSave?: (quote: string, author: string) => void
}

const QuoteForm = ({
  onSave = (quote: string, author: string) => {},
}: QuoteFormProps) => {
  const [author, setAuthor] = useState<string | undefined>(undefined)
  const [quote, setQuote] = useState<string | undefined>(undefined)

  const onPress = (event: GestureResponderEvent) => {
    event.preventDefault()
    onSave(quote, author)
  }

  return (
    <Box
      p={16}
      style={{
        width: "100%",
      }}
    >
      <Stack direction="column" spacing={8}>
        <TextInput
          value={quote}
          onChangeText={(text) => setQuote(text)}
          label="Quote"
          variant="outlined"
          multiline={true}
          scrollEnabled={true}
          numberOfLines={8}
          textAlignVertical="top"
        />
        <TextInput
          value={author}
          onChangeText={(text) => setAuthor(text)}
          label="Author"
          variant="outlined"
        />
        <Button onPress={onPress} title="Save" variant="outlined" />
      </Stack>
    </Box>
  )
}

export default QuoteForm
