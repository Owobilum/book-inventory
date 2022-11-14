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