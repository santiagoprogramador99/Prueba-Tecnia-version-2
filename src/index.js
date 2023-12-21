import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.scss';  // Importa estilos globales si los tienes

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
