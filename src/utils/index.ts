export const parseLinkHeader = (linkHeader: string) => {
  return Object.fromEntries(
    linkHeader
      .split(', ')
      .map((header) => header.split('; '))
      .map((header) => [
        header[1].replace(/"/g, '').replace('rel=', ''),
        header[0].slice(1, -1),
      ])
  )
}

export const MILLISECS_IN_DAY = 86400000

export const formatDate = (date: string) => {
  let formattedDate = new Date(date)
  return formattedDate.toLocaleString()
}
