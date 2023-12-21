import React from 'react';
import './styles/productGallery.scss';
import images from '../../data/products.json';  // Importa las imágenes desde tu JSON

const ProductGallery = () => {
  return (
    <div className="product-gallery">
      {/* Galería de fotos de producto con slider */}
      {/* Completa con tus propios datos y estilos */}
      <div className="slider">
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
