// App.js

import React from 'react';
import Menu from './components/Menu/Menu';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductGallery from './components/ProductGallery/ProductGallery';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import './styles/App.scss';

const App = () => {
  // Definir un objeto de detalles del producto
  const productDetails = {
    title: 'Camiseta',
    subtitle: 'Camiseta de algodón de alta calidad',
    priceBefore: 100,
    priceNow: 80,
    discountPercentage: 20,
  };

  return (
    <div className="app">
      <h1>Ada store</h1>

      <Menu />

      {/* Sección para ProductDetails */}
      <div className="section">
        <ProductDetails product={productDetails} />
      </div>

      {/* Sección para ProductGallery */}
      <div className="section">
        <ProductGallery />
      </div>

      {/* Sección para ShoppingCart */}
      <div className="section">
        <ShoppingCart />
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="contact-info">
          <p>
            <strong>Facebook:</strong> Ada Store
          </p>
          <p>
            <strong>Instagram:</strong> AdaSTore
          </p>
          <p>
            <strong>Teléfono de contacto:</strong> 3109802980
          </p>
          <p>
            <strong>Fijo:</strong> 19870021
          </p>
          <p>
            <strong>País:</strong> Colombia
          </p>
          <p>
            <strong>Dirección:</strong> Cra 91 #38-23
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
