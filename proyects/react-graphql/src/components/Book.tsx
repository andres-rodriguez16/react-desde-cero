import { useFindBook } from '../hooks/useFindBook.js'

export type Book = {
  id: string
  title: string
  author: string
  year: number
  // addition : Addition!
  // editorial : Editorial!
  // edition : string!
}
interface ListBook {
  books: [Book]
}

export const Book = ({ books }: ListBook) => {
  const { book, getBook, setBook } = useFindBook()
  if (book) {
    return (
      <section>
        <button onClick={() => setBook(null)}>close</button>
        <p>{book.title}</p>
      </section>
    )
  }

  const handleOnclick = (title: string) => {
    getBook({
      variables: { title: title }
    })
  }

  return (
    <main>
      {
        books.map((book: Book) => {
          return (
            <section key={book.title} onClick={() => handleOnclick(book.title)}>
              <p>{book.title}</p>
            </section>
          )
        })
      }
    </main>
  )
}
