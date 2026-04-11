import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css'; 

function Footer() {
    return (
        <footer className="bg-light py-5 border-top mt-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
                        <Link to="/" className="d-flex align-items-center justify-content-center justify-content-md-start text-decoration-none">
                            <img src="/logo-pagina.png" alt="Logo" width="40" className="me-2" />
                            <span className="fs-4 fw-bold text-dark">
                                Eco<span className="brand-highlight">Rutas</span>
                            </span>
                        </Link>
                        <p className="text-muted small mt-2">Cuidando el medio ambiente barrio a barrio.</p>
                    </div>

                    <div className="col-md-4 text-center mb-4 mb-md-0">
                        <span className="text-muted">
                            Hecho con 💚 para las <br />
                            <strong>Comunas 1 y 2 de Medellín</strong>
                        </span>
                    </div>

                    <div className="col-md-4 text-center text-md-end">
                        <div className="d-flex justify-content-center justify-content-md-end gap-3">
                            <Link to="/preguntas" className="text-decoration-none text-muted small">Preguntas</Link>
                            <Link to="/mapa" className="text-decoration-none text-muted small">Buscar Horarios</Link>
                        </div>
                        <p className="text-muted mb-0 mt-2" style={{ fontSize: '0.8rem' }}>
                            © 2026 EcoRutas Medellín
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;