import React, { useState } from 'react';
import './ShoppingCart.scss'; // Ajusta la importación según la ubicación del archivo

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      // Si el producto ya está en el carrito, solo actualiza la cantidad
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // Si el producto no está en el carrito, agrégalo con cantidad 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
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
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <div className="cart-item">
                  <div>
                    <strong>{item.title}</strong>
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                  </div>
                  <div>
                    <button onClick={() => removeFromCart(index)}>Eliminar</button>
                    <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                    <button onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total: ${calculateTotal()}</p>
            <button onClick={clearCart}>Vaciar Carrito</button>
          </div>
        </>
      )}
      {/* Botón para agregar un nuevo producto al carrito */}
      <button onClick={() => addToCart({ id: 1, title: 'Nuevo Producto', price: 10 })}>
        Agregar Nuevo Producto
      </button>
    </div>
  );
};

export default ShoppingCart;

