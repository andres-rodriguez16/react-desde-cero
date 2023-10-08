import {  useQuery } from '@apollo/client'
import { ALL__BOOK } from '../graphql/queries'

export function useBooks() {
  const { data, error, loading } = useQuery(
    ALL__BOOK,
    {
      pollInterval: 2000
    }
  )
  return {data, error, loading}
}



