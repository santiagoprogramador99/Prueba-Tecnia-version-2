// App.js
import Menu from './components/Menu/Menu';
import './components/ProductDetails/ProductDetails.scss'; // Fix the import path
import ProductGallery from './components/ProductGallery/ProductGallery';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import './styles/App.scss';

function App() {
  return (
    <div className="app">
      <h1>Tu Aplicación</h1>

      <Menu />
      <div className="section">
        <ProductDetails /> {/* Correct the component name here */}
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


  




