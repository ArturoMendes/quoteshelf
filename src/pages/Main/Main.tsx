import { Box } from "@react-native-material/core"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { Route, Routes, useNavigate } from "react-router-native"
import AddButton from "../../components/AddButton"
import Header from "../../components/Header"
import QuoteForm from "../../components/QuoteForm"
import QuoteList from "../../components/QuoteList"
import PageContainer from "../PageContainer"

const fakeQuotes = [
  {
    id: 0,
    author: "anonymous",
    quote: "blabla",
  },
  {
    id: 1,
    author: "developer",
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolore accusantium sapiente, nihil asperiores magnam blanditiis animi ducimus facilis ipsum fuga? Numquam maxime quod impedit cupiditate? Quod sunt maxime numquam.",
  },
  {
    id: 2,
    author: "scrum master",
    quote: "how is it going?",
  },
  {
    id: 3,
    author: "developer",
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolore accusantium sapiente, nihil asperiores magnam blanditiis animi ducimus facilis ipsum fuga? Numquam maxime quod impedit cupiditate? Quod sunt maxime numquam.",
  },
  {
    id: 4,
    author: "developer",
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolore accusantium sapiente, nihil asperiores magnam blanditiis animi ducimus facilis ipsum fuga? Numquam maxime quod impedit cupiditate? Quod sunt maxime numquam.",
  },
  {
    id: 5,
    author: "developer",
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolore accusantium sapiente, nihil asperiores magnam blanditiis animi ducimus facilis ipsum fuga? Numquam maxime quod impedit cupiditate? Quod sunt maxime numquam.",
  },
]

const Main = () => {
  const navigate = useNavigate()

  const openQuoteForm = () => {
    navigate("/add-quote")
  }

  const onSaveQuote = (quote: string, author: string) => {
    console.log(author)
    console.log(quote)
    // FIXME: maybe use promises and handle 
    // them in the form to avoid using a callback
    navigate("/")
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
              <QuoteList quotes={fakeQuotes} />
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
