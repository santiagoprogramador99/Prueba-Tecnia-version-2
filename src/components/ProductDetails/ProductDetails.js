import React, { Component } from 'react';
import './ProductDetails.scss';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1, // Valor inicial
    };
  }

  handleChange = (e) => {
    this.setState({ quantity: e.target.value });
  };

  render() {
    return (
      <div className="product-details">
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
        <input
          type="number"
          id="quantity"
          value={this.state.quantity}
          min="1"
          onChange={this.handleChange}
        />
        <button>Agregar a mi bolsa</button>
      </div>
    );
  }
}

export default ProductDetails;

