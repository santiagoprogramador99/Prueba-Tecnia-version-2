// App.js
import Menu from './components/Menu/Menu';
import ProductsDetails from './components/ProductsDetails/ProductsDetails';

i
import ProductGallery from './components/ProductGallery/ProductGallery';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import './styles/App.scss';  // Importa los estilos de App

function App() {
  return (
    <div className="app">
      <h1>Tu Aplicación</h1>

      <Menu />
      <div className="section">
        <ProductsDetails />
      </div>

      <div className="section">
        <ProductGallery />
      </div>

      <div className="section">
        <ShoppingCart />
      </div>

      <div className="footer">
        Footer de la página
      </div>
    </div>
  );
}

export default App;




