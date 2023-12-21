import React from 'react';
import './Menu.scss';

// Importa los datos de productos con las imágenes
import productsData from '../../data/products.json';  // Ajusta la ruta según la ubicación real de tu archivo

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        {productsData.map((product) => (
          <li className="menu-item" key={product.id}>
            <a href="#">
              {product.image && <img src={product.image} alt={product.name} />}
              {product.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
