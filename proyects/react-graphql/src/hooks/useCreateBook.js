import { useMutation, } from '@apollo/client'
import { ALL__BOOK } from '../graphql/queries'
import { CREATE_BOOK } from '../graphql/mutations'

export function useCreateBook() {
  const [createBook ] = useMutation(CREATE_BOOK,
    {
      refetchQueries: [{ query: ALL__BOOK }]
    }
  )
  return {createBook}
}
