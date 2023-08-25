import React from 'react';

const Product = ({ product, addToCart }) => (
  <div className='card p-5'>
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
);

export default Product;
