import React from 'react';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li className="menu-item">
          <a href="#">Mujer</a>
          <ul className="submenu">
            <li><a href="#">Camisetas</a></li>
            <li><a href="#">Pijamas</a></li>
            <li><a href="#">Ropa interior</a></li>
            <li><a href="#">Chaquetas y Buzos</a></li>
            <li><a href="#">Joggers, pantalones y shorts</a></li>
            <li><a href="#">Calzado</a></li>
            <li><a href="#">Accesorios</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;

