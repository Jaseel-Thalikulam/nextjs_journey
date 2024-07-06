import React, { ReactNode } from 'react'

const Card = ({children}:{children:ReactNode}) => {
  return (
    <div className='bg-gray-700 h-full  flex items-center justify-center p-10'>{children}</div>
  )
}

export default Card