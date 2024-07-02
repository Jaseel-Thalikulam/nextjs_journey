import React from 'react'

const productDetail = ({params}:{params:{productId:string}}) => {
  return (
    
      <div>productDetail of product {params.productId}</div>
  )
}

export default productDetail