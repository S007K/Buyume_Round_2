import React, { useState } from 'react';
import Product from './Components/Product';
import Cart from './Components/Cart';

const App = () => {
  const initialProducts = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200},
    { id: 3, name: 'Product 3', price: 300 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = product => {
    const existingItem = cart.find(item => item.product.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { product: product, quantity: 1 }]);
    }
  };

  const increaseQuantity = product => {
    const updatedCart = cart.map(item =>
      item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = product => {
    const updatedCart = cart.map(item =>
      item.product.id === product.id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = product => {
    const updatedCart = cart.filter(item => item.product.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <div className='container'>
      <h1 className='d-flex justify-content-center'>Shopping Cart Example</h1>
      <div className='left d-flex justify-content-around'>
        {initialProducts.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <div className='right'>
      <Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />
      </div>
      
    </div>
  );
};

export default App;
