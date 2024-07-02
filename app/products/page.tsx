import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Products", // This title will replaces the title of root meta data
    // As the description is not given here so the description will be the default root description.
  };
const Products = () => {
  return (
    <div>Products</div>
  )
}

export default Products