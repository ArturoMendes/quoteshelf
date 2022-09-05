import QuoteForm from "./QuoteForm"
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native"
import { useNavigate } from "react-router-native"

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper")

jest.mock("react-router-native", () => ({
  useNavigate: jest.fn(),
}))

const navigate = jest.fn((path: string) => {})
const useNavigateSpy = useNavigate
useNavigateSpy.mockReturnValue(navigate)

afterEach(() => {
   jest.clearAllMocks()
})

test("renders proper inputs", () => {
  render(<QuoteForm />)

  const authorInput = screen.getByText(/author/i)
  const quoteInput = screen.getByText(/quote/i)

  expect(authorInput).toBeDefined()
  expect(quoteInput).toBeDefined()
})

test("calls onSave function", async () => {
  const onSaveMock = jest.fn((q: string, a: string) => Promise.resolve())
  const testAuthor = "test-author"
  const testQuote = "test-quote"

  render(<QuoteForm onSave={onSaveMock} />)

  const authorInput = screen.getByText(/author/i)
  const quoteInput = screen.getByText(/quote/i)
  const saveButton = screen.getByText(/save/i)

  fireEvent.changeText(authorInput, testAuthor)
  fireEvent.changeText(quoteInput, testQuote)
  fireEvent.press(saveButton)

  expect(saveButton).toBeDefined()
  expect(onSaveMock).toHaveBeenCalledTimes(1)
  expect(onSaveMock).toHaveBeenCalledWith(testQuote, testAuthor)
})
