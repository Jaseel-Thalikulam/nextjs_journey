import { Metadata } from 'next'
import React from 'react'

/*
# Implementing dynamic metaData 
 - with generateMetadata function
 - the function should be named as "generateMetadata"
 - we can also fetch the title/description by changing the function to async
 - we cant export the metaData object and generateMetadata from the same route segment
*/

type Props = {
  params: {
    productId:string
  }
}

export const generateMetadata = ({ params }: Props):Metadata => {
  return {
    title:`Product ${params.productId}`
  }
}

const productDetail = ({params}:Props) => {
  return (
    
      <div>productDetail of product {params.productId}</div>
  )
}

export default productDetail