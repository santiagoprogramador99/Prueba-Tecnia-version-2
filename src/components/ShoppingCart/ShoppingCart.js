import React, { useState } from 'react';
import './ShoppingCart/ShoppingCart.scss'; // Adjust the import based on the file location

// Rest of your code


// Rest of your code

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="shopping-cart">
      <h3>Carrito de Compras</h3>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div className="cart-item">
                <div>
                  <strong>{item.title}</strong>
                  <p>Precio: ${item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                </div>
                {/* Agrega botones o acciones según tus necesidades */}
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <p>Total: ${calculateTotal()}</p>
          {/* Agrega botones o acciones según tus necesidades */}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;