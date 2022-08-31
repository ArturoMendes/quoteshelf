import { Surface, Text } from "@react-native-material/core"
import { Quote } from "../../../domain/dataInterfaces"

interface QuoteEntryProps {
  entry: Quote
}

const QuoteEntry = ({ entry }: QuoteEntryProps) => {
  const { author, quote } = entry
  return (
    <Surface
      elevation={8}
      category="medium"
      style={{
        marginHorizontal: 16,
        marginVertical: 8,
        padding: 24,
      }}
    >
      <Text variant="h6" color="primary">
        {author}
      </Text>
      <Text
        style={{
          marginTop: 4,
        }}
        variant="body1"
      >
        {quote}
      </Text>
    </Surface>
  )
}

export default QuoteEntry
