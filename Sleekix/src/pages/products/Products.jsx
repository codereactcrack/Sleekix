import React, { useEffect, useState } from 'react';
import './Products.css';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Products = () => {
  const productList = useLoaderData();
  const navigate = useNavigate();

  const categoryList = [
    { name: 'Beauty', value: 'beauty' },
    { name: 'Fragrances', value: 'fragrances' },
    { name: 'Furniture', value: 'furniture' },
    { name: 'Groceries', value: 'groceries' }
  ];

  return (
    <div className="products-page">
      <div className="category-container">
        <div className="category-title">
          Sort By Category:
        </div>
        <div className="category-list">
          <ul>
            {categoryList.map((item) => (
              <li key={item.name} className="category-item" onClick={() => navigate(`/products/category/${item.value}`)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="product-listing">
        {productList.map((item) => (
          <div key={item.id} className="product-container" onClick={() => navigate(`/products/${item.id}`)}>
            <div className="product-brand">{item.brand}</div>
            <div className="product-image">
              <img src={item.thumbnail} alt="product" />
            </div>
            <div className="product-title">{item.title}</div>
            <div className="product-description">{item.description}</div>
            <div className="product-price">Price: ${item.price}</div>
            <div className="product-rating">Rating: {item.rating}/5</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

export const getProduct = async () => {
  const data = await fetch('https://dummyjson.com/products');
  const result = await data.json();
  return result.products;
}
