import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Archivo CSS global

// Renderiza la aplicación dentro del elemento con id 'root' en index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
