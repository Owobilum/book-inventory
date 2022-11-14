import { useCallback, useState } from 'react'
import { InfiniteData, useInfiniteQuery } from 'react-query'

import { axiosInstance } from '../axiosInstance'
import { queryKeys } from '../react-query/constants'
import type { BookType } from '../types'
import { parseLinkHeader } from '../utils'

type InfiniteBooksType = InfiniteData<BookType[]> | undefined

interface UseInfiniteBooks {
  books: InfiniteBooksType
  hasNextPage: boolean | undefined
  fetchNextPage: () => void
  isFetchingNextPage: boolean
  isLoading: boolean
}

const defaultPageParam = 'https://www.anapioficeandfire.com/api/books'

export function useInfiniteBooks(): UseInfiniteBooks {
  const [nextPageUrl, setNextPageUrl] = useState<string | undefined>()

  const getBooks = useCallback(
    async (pageUrl: string | undefined): Promise<BookType[]> => {
      const { data, headers } = await axiosInstance.get(pageUrl || '')
      if (headers?.link) {
        const linkObj = parseLinkHeader(headers.link)
        linkObj.next ? setNextPageUrl(linkObj.next) : setNextPageUrl(undefined)
      }
      return data
    },
    []
  )

  const {
    data: books,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery(
    queryKeys.books,
    ({ pageParam = defaultPageParam }) => getBooks(pageParam),
    {
      getNextPageParam: () => nextPageUrl,
    }
  )

  return { books, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading }
}
