import { Metadata } from 'next'
import React from 'react'

/*
# Implementing dynamic metaData 
 - with generateMetadata function
 - the function should be named as "generateMetadata"
 - we can also fetch the title/description by changing the function to async
 - we cant export the metaData object and generateMetadata from the same route segment
*/

/**
 * # The Title Metadata
 * - Title metadata acts as a string and as an object.
 * - The object has 3 properties: `absolute`, `template`, and `default`.
 * - `default` - A default title which will display if there is no other title given in its child page or layout.
 * - `template` - Acts as a template "%s | some string". The "%s" will be replaced with the title of its child.
 *      - Example shown in RootLayout and in this page.
 * - `absolute` - Replaces the complete title without following its parent metadata title template.
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