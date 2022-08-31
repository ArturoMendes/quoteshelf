import QuoteForm from "./QuoteForm"
import { render, screen } from "@testing-library/react-native"

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper")

test("renders proper inputs", () => {
  render(<QuoteForm />)

  const authorInput = screen.getByText(/author/i)

  expect(authorInput).toBeDefined()
})
