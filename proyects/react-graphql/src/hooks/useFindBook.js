import { useState, useEffect } from 'react'
import { useLazyQuery  } from '@apollo/client'
import { FIND_BOOK } from '../graphql/queries'

export const useFindBook = () => {
  const [getBook, result] = useLazyQuery(FIND_BOOK)
  const [book, setBook] = useState()

  useEffect(() => {
    setBook(result.data?.findBook);
  }, [result])
 return { book, getBook, setBook };
}
