import React, { useEffect, useState } from 'react'
import './Products.css'
import { useNavigate } from 'react-router-dom';

const Products = () => {

  const [productList,setProductList] = useState([]);
  const naviagte = useNavigate();

  useEffect(() => {
    getProduct()
  }, []) 

  async function getProduct(){
    const data = await fetch('https://dummyjson.com/products');
    const result = await data.json();
    setProductList(result.products);
  }
  
  return (
    <div>

      <div className='category-conatiner'>
        <div className='category'>
          Sort By Category:-
        </div>
      </div>

      <div className='product-listing'>
        {productList.map((item)=>{
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

    </div>
  )
}

export default Products