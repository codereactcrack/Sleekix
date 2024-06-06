import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const  product = useLoaderData();

  return (
      <div className='productDetails'>
            <div key={product.id} className='productDetails-container'>
              <div className='productDetails-brand'>{product.brand}</div>
              <div className='productDetails-image'> <img src= {product.thumbnail} alt='product-iamge'/></div>
              <div className='productDetails-title'>{product.title}</div>
              <div className='productDetails-description'>{product.description}</div>
              <div className='productDetails-price'>Price:-${product.price}</div>
              <div className='productDetails-rating'>Rating:-{product.rating}/5</div>
            </div>
      </div>
  )
}

export default ProductDetails

export const getProductDeatils = async ({params}) => {
    const {id}= params;   
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await data.json();
    return result;
}