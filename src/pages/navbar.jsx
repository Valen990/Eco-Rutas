import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <a href="/" className="logo">
                    <img src="/logo-pagina.png" alt="Logo" className="nav-logo-img" />
                    <span className="brand-name">
                        Eco<span className="brand-highlight">Rutas</span>
                    </span>
                </a>
                
                <Link to="/mapa" className="nav-link">Buscar horarios</Link>
                <Link to="/caracteristicas" className="nav-link">Características</Link>

                <div className="nav-right">
                    {/* <form className="search-box">
                        <input type="text" placeholder="Buscar..." />
                        <button type="submit">🔍︎</button>
                    </form> */}
                
                    <div className="location">
                        <span>📍 Comunas 1 y 2, Medellín</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;