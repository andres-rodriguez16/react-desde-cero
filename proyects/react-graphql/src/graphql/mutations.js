import { gql} from '@apollo/client'

export const CREATE_BOOK = gql`
mutation AddBook($title: String!, $author: String!, $year: Int!, $edition: String!) {
  addBook(
    title: $title, 
    author: $author, 
    year: $year, 
    edition: $edition
    ) {
      author,
      id,
      title,
      year  
  }
}
`