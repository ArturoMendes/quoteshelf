import { Box } from "@react-native-material/core"
import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-native"
import AddButton from "../../components/AddButton"
import Header from "../../components/Header"
import QuoteForm from "../../components/QuoteForm"
import QuoteList from "../../components/QuoteList"
import { Quote } from "../../domain/dataInterfaces"
import { createQuote, getQuote } from "../../persistence/apiInterface"
import PageContainer from "../PageContainer"

const Main = () => {
  const navigate = useNavigate()
  const [data, setData] = useState<Quote[]>([])

  useEffect(() => {
    getQuote()
      .then((quotes) => setData(quotes))
      .catch((error) => console.log(error))
  }, [])

  const openQuoteForm = () => {
    navigate("/add-quote")
  }

  const onSaveQuote = (quote: string, author: string) => {
    return createQuote(quote, author)
  }

  return (
    <>
      <Header
        onMenuPress={() => {
          navigate("/")
        }}
      />
      <Routes>
        <Route
          path="*"
          element={
            <PageContainer>
              <QuoteList quotes={data} />
              <Box
                style={{
                  position: "absolute",
                  bottom: 20,
                  right: 20,
                }}
              >
                <AddButton onPress={openQuoteForm} />
              </Box>
            </PageContainer>
          }
        />
        <Route path="/add-quote" element={<QuoteForm onSave={onSaveQuote} />} />
      </Routes>
      <StatusBar style="auto" />
    </>
  )
}

export default Main
