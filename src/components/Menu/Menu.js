import React from 'react';
import './Menu.scss';
import productsData from '../../data/products.json';  // Ajusta la ruta según sea necesario

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        {productsData.map((product) => (
          <li className="menu-item" key={product.id}>
            <a href="#">
              {product.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;



