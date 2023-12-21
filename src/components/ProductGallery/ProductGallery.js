import React from 'react';
// Adjust the import based on the file location

import './ProductGallery.scss';



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
