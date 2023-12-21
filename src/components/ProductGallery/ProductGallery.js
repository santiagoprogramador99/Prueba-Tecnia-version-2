import React from 'react';
import productsData from '../../data/products.json';  // Ajusta la ruta según sea necesario
import './ProductGallery.scss';

const ProductGallery = () => {
  return (
    <div className="product-gallery">
      <div className="slider">
        {productsData.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;






