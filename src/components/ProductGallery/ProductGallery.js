import React from 'react';
import Slider from 'react-slick';
import productsData from '../../data/products.json';
import './ProductGallery.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductGallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="product-gallery">
      <Slider {...settings}>
        {productsData.map((product) => (
          <div key={product.id} className="product-slide">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <p>{product.name}</p>
              {/* Agregar detalles adicionales según sea necesario */}
              <p>Precio Antes: ${product.priceBefore}</p>
              <p>Precio Ahora: ${product.priceNow}</p>
              <p>% Descuento: {product.discountPercentage}%</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Componentes de flechas personalizadas
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow next" onClick={onClick}>
      {/* Puedes personalizar la flecha aquí */}
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow prev" onClick={onClick}>
      {/* Puedes personalizar la flecha aquí */}
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

export default ProductGallery;
