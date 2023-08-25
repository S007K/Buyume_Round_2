import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  const getTotalPrice = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.product.price * item.quantity;
    });
    return total;
  };

  return (
    <div className='m-5 d-flex flex-column  justify-content-center'>
      <h2 className='d-flex justify-content-center bg-secondary'>Cart</h2>
      {cart.map(item => (
        <CartItem
          key={item.product.id}
          item={item}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total Price: ${getTotalPrice()}</h2>
    </div>
  );
};

export default Cart;
