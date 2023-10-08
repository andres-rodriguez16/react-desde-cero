import { gql } from '@apollo/client'

export const ALL__BOOK = gql`
  query AllBooks {
    allBooks {
      id,
      author,
      title,
      year  
    }
  }
`

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