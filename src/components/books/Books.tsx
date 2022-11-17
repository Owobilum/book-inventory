import { FC, Fragment, useEffect, useState } from 'react'
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
  const [filterParams, setFilterParams] = useState<{
    filter: string
    searchParam: string
  }>({ filter, searchParam })

  const handleClick = () => {
    setFilterParams({ filter, searchParam })
  }

  useEffect(() => {
    if (searchParam === '' || filter === '') {
      setFilterParams({ filter, searchParam })
    }
  }, [filter, searchParam])

  return (
    <div>
      <div className="px-[5%] w-full h-[300px] bg-custom_gray flex flex-col items-center justify-center gap-8 bg-cover">
        <div className="flex gap-2">
          <div className="relative lg:w-[450px] h-10 lg:h-12">
            {filter !== 'end_date' && (
              <input
                type="text"
                onChange={(e) => setSearchParam(e.target.value)}
                value={searchParam}
                placeholder="Search for a book"
                className="w-full h-full px-7 rounded placeholder:text-gray-500 font-montserrat text-black 
              focus:border focus:border-custom_orange caret-custom_orange focus:outline-none bg-white lg:h-12"
              />
            )}
            {filter === 'end_date' && (
              <input
                type="datetime-local"
                id="end_date"
                name="end_date"
                onChange={(e) => setSearchParam(e.target.value)}
                value={searchParam}
                className="w-full h-full px-7 rounded placeholder:text-gray-500 font-montserrat text-black 
                focus:border focus:border-custom_orange caret-custom_orange focus:outline-none bg-white lg:h-10"
              />
            )}
            <span
              className="absolute right-3 top-2 w-fit z-20 text-[#898989] font-light 
            text-sm cursor-pointer md:top-3"
              onClick={() => setSearchParam('')}
            >
              X
            </span>
          </div>
          <button
            onClick={handleClick}
            className="bg-custom_orange text-sm lg:text-base w-16 h-10 lg:w-28 lg:h-12 font-montserrat text-white rounded-lg 
            block hover:bg-[#964B00] "
          >
            Search
          </button>
        </div>
        <div className="">
          {filterOptions?.map(({ name, value }) => (
            <Fragment key={name}>
              <input
                type="radio"
                id={value}
                name="filter"
                value={value}
                onChange={(e) => setFilter(e.target.value)}
                className="cursor-pointer accent-custom_orange"
              />
              <label htmlFor={value} className="ml-1 mr-4 font-montserrat">
                {name}
              </label>
            </Fragment>
          ))}
        </div>
      </div>
      <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
        {isLoading && <h4>Loading...</h4>}
        {books ? (
          books?.pages.map((page, index) => (
            <div
              key={index}
              className="px-[5%] mt-8 lg:mt-12 flex justify-center gap-6 flex-wrap pb-8"
            >
              {page.map((book) => {
                return (
                  <Book key={book.name} book={book} filter={filterParams} />
                )
              })}
            </div>
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
