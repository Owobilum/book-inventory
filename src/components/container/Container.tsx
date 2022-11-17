import { FC, ReactNode } from 'react'

const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex justify-center">
    <div className="w-full max-w-[1700px]">{children}</div>
  </div>
)

export default Container
