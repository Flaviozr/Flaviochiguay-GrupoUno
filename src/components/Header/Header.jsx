// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Asegúrate de tener el archivo CSS correspondiente

const Header = () => {
    return (
        <header className="navbar">
            <div className="navbar-brand">REAL  KING STORE </div>
            <ul className="navbar-menu">
                <li><Link to="/Home">Inicio</Link></li>
                <li><Link to="/Marcas">Marcas</Link></li>
                <li><Link to="/Adultos">Adultos</Link></li>
                <li><Link to="/Ninos">Ninos</Link></li>
                <li><Link to="/Productos">Productos</Link></li>
            </ul>
        </header>
    );
};

export default Header;
