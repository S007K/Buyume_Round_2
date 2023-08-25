import React from 'react';

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeFromCart }) => (
  <div>
    <h4>{item.product.name}</h4>
    <p>Price: ${item.product.price}</p>
    <p>Quantity: {item.quantity}</p>
    <button onClick={() => increaseQuantity(item.product)}>+</button>
    <button onClick={() => decreaseQuantity(item.product)}>-</button>
    <button onClick={() => removeFromCart(item.product)}>Remove</button>
  </div>
);

export default CartItem;
