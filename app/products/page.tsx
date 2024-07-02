import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'
export const metadata: Metadata = {
    title: "Products", // This title will replaces the title of root meta data
    // As the description is not given here so the description will be the default root description.
  };
const Products = () => {
  return (
/**
 * Link component -used for navigation
 * The replace property replaces the current history state instead of adding a new url
 */
    <div>
      <Link href="/">Go to Home</Link>
      
      Products
      <Link href="products/1">      Product 1 </Link>
      <Link href="products/2">      Product 2 </Link>
     
      <Link href="products/3" replace>      Product 3 </Link>

    </div>
  )
}

export default Products