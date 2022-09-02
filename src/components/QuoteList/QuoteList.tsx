import { Text } from "@react-native-material/core"
import { FlatList, SafeAreaView } from "react-native"
import { Quote } from "../../domain/dataInterfaces"
import QuoteEntry from "./QuoteEntry"

interface QuoteListProps {
  quotes?: Quote[]
}

const renderQuote = ({ item }) => {
  return <QuoteEntry entry={item} />
}

const QuoteList = ({ quotes }: QuoteListProps) => {
  return (
    <>
      {quotes ? (
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: 'lightgrey'
          }}
        >
          <FlatList
            data={quotes}
            renderItem={renderQuote}
            keyExtractor={(quote) => quote.id.toString()}
          />
        </SafeAreaView>
      ) : (
        <Text variant="body1">No quotes to display</Text>
      )}
    </>
  )
}

export default QuoteList
