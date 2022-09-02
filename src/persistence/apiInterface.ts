import { Quote } from "../domain/dataInterfaces"

const fakeData: Quote[] = []

export function getQuote(): Promise<Quote[]> {
  return new Promise((resolve, reject) => {
    resolve(fakeData)
  })
}

export function createQuote(quote: string, author: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    let q: Quote = {
        author: author,
        quote: quote,
        id: fakeData.length
    }
    fakeData.push(q)
    resolve(true)
  })
}
