import { useQuery } from 'react-query'

import { axiosInstance } from '../axiosInstance'
import { queryKeys } from '../react-query/constants'
import type { BookType } from '../types'

// query function for useQuery call
async function getBooks(): Promise<BookType[]> {
  const { data } = await axiosInstance.get('/books')
  return data
}

// types for hook return object
interface UseBooks {
  books: BookType[] | undefined
}

export function useBooks(currentPage: number): UseBooks {
  const { data: books } = useQuery([queryKeys.books, currentPage], () =>
    getBooks()
  )

  return { books }
}
