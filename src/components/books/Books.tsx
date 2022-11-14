import { FC, Fragment } from 'react'
import InfiniteScroll from 'react-infinite-scroller'

import { useInfiniteBooks } from '../../hooks/useInfiniteBooks'
import Book from '../book/Book'

const Books: FC = () => {
  const { books, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteBooks()

  return (
    <div>
      <h1>Books</h1>
      <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
        {isLoading && <h4>Loading...</h4>}
        {books ? (
          books?.pages.map((page, index) => (
            <Fragment key={index}>
              {page.map((book) => {
                return <Book key={book.name} book={book} />
              })}
            </Fragment>
          ))
        ) : (
          <></>
        )}
        {isFetchingNextPage && <h4>Loading New...</h4>}
      </InfiniteScroll>
    </div>
  )
}

export default Books
