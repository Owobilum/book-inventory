import { FC, Fragment, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'

import { useInfiniteBooks } from '../../hooks/useInfiniteBooks'
import Book from '../book/Book'

const filterOptions: { name: string; value: string }[] = [
  { name: 'None', value: '' },
  { name: 'Publisher', value: 'publisher' },
  { name: 'Name', value: 'name' },
  { name: 'ISBN', value: 'isbn' },
  { name: 'Authors', value: 'authors' },
  { name: 'End Date', value: 'end_date' },
  { name: 'Character Name', value: 'character_name' },
  { name: 'Character Culture', value: 'character_culture' },
]

const Books: FC = () => {
  const { books, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteBooks()
  const [filter, setFilter] = useState('')
  const [searchParam, setSearchParam] = useState('')

  return (
    <div>
      <h1>Books</h1>

      <div style={{ padding: 16 }}>
        <input
          type="text"
          onChange={(e) => setSearchParam(e.target.value)}
          value={searchParam}
        />
      </div>

      <div style={{ paddingBottom: 32, paddingLeft: 16 }}>
        {filterOptions?.map(({ name, value }) => (
          <Fragment key={name}>
            <input
              type="radio"
              id={value}
              name="filter"
              value={value}
              onChange={(e) => setFilter(e.target.value)}
              style={{ cursor: 'pointer' }}
            />
            <label htmlFor={value}>{name}</label>
            <br />
          </Fragment>
        ))}
      </div>
      <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
        {isLoading && <h4>Loading...</h4>}
        {books ? (
          books?.pages.map((page, index) => (
            <Fragment key={index}>
              {page.map((book) => {
                return (
                  <Book
                    key={book.name}
                    book={book}
                    filter={{ filter, searchParam }}
                  />
                )
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
