import React, { Component } from 'react';
import './ProductDetails.scss';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  handleChange = (e) => {
    this.setState({ quantity: e.target.value });
  };

  render() {
    const { title, subtitle, priceBefore, priceNow, discountPercentage } = this.props.product;

    return (
      <div className="product-details">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <p>Precio Antes: ${priceBefore}</p>
        <p>Precio Ahora: ${priceNow}</p>
        <p>% Descuento: {discountPercentage}%</p>
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


