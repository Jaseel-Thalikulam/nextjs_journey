import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='flex space-x-4'>
      <h1>
      Home
      </h1>
      <Link href="/products">Go to Products</Link>
      <Link href="/sign-in">Go to Sign In</Link>
      <Link href="/sign-up">Go to Sign Up</Link>
    </div>
  )
}

export default Home