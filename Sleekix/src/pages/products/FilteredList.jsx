import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const FilteredList = () => {
  const naviagte = useNavigate();
  const filterList = useLoaderData();
  
  return (
    <div className='product-listing'>
    {filterList.map((item)=>{
      return(
        <div key={item.id} className='product-container' onClick={()=>naviagte(`/products/${item.id}`)}>
          <div className='product-brand'>{item.brand}</div>
          <div className='product-image'> <img src= {item.thumbnail} alt='product-iamge'/></div>
          <div className='product-title'>{item.title}</div>
          <div className='product-description'>{item.description}</div>
          <div className='product-price'>Price:-${item.price}</div>
          <div className='product-rating'>Rating:-{item.rating}/5</div>
        </div>
      )
    })}
  </div>
  )
}

export default FilteredList

export const getFilterList =   async  ({params})=>{
  const {fiterType,filterName} = params;
  const data = await fetch(`https://dummyjson.com/products/${fiterType}/${filterName}`);
  const result = await data.json();
  return (result.products);
}