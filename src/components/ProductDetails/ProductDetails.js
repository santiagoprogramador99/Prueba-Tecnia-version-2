import React from 'react';
import './ProductDetails.scss';

const ProductDetails = () => {
  return (
    <div className="product-details">
      {/* Título, subtítulo, precio, % descuento, tallas, selector de unidades, botón */}
      {/* Completa con tus propios datos y estilos */}
      <h2>Título del Producto</h2>
      <p>Subtítulo</p>
      <p>Precio Antes: $100</p>
      <p>Precio Ahora: $80</p>
      <p>% Descuento: 20%</p>
      <label htmlFor="sizes">Tallas:</label>
      <select id="sizes">
        <option value="small">S</option>
        <option value="medium">M</option>
        <option value="large">L</option>
      </select>
      <label htmlFor="quantity">Cantidad:</label>
      <input type="number" id="quantity" value="1" min="1" />
      <button>Agregar a mi bolsa</button>
    </div>
  );
}

export default ProductDetails;
