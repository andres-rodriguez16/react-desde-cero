import { useState, useEffect} from 'react'
import { useLazyQuery, gql } from '@apollo/client'

type Book = {
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

export const FIND_BOOK = gql`
query FindBook($title: String!) {
  findBook(title: $title) {
    title,
    year,
    id,
    author
  }
}
`
export const Book = ({ books }: ListBook) => {
  const [getBook, result] = useLazyQuery(FIND_BOOK)
   const [book, setBook] = useState<Book | null>(null)
  
  useEffect(() => {
     setBook(result.data?.findBook);
  }, [result])
  
  if (book) {
    return (
      <section>
        <button onClick={() => setBook(null)}>close</button>
       <p>{book.title}</p> 
      </section>
    )
  }
  
  const handleOnclick = (title : string) => {
    getBook({
      variables : {title : title}
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
