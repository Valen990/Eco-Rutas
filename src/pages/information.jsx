import React from 'react';
import './css/information.css';
import { Link } from 'react-router-dom';

function Information() {
    return (
        <section className="container py-5 text-center">
            <div className="badge rounded-pill bg-success-subtle text-success mb-3 p-2 px-3 d-inline-flex align-items-center" >
                <span className="pulse-dot me-2">●</span>
                Información actualizada 2026
            </div>

            <h1 className="display-4 fw-bold mb-4">
                Conoce cuando pasa el <span className="text-success">camión de basura</span>
            </h1>

            <p className="lead mb-5 mx-auto" style={{ maxWidth: '700px' }}>
                Información de horarios de recolección para las <strong>Comunas 1 (Popular) y 2 (Santa Cruz)</strong> de Medellín. 
                Busca tu barrio y nunca más dejes la basura en la calle a destiempo.
            </p>

            <div className="d-flex justify-content-center gap-3 mb-4">
                <Link to="/mapa">
                    <button className="btn btn-success btn-lg px-4 rounded-pill">
                        Buscar mi horario
                    </button>
                </Link>

                <Link to="/recordatorios">
                    <button className="btn btn-outline-dark btn-lg px-4 rounded-pill">
                        Activar Recordatorios
                    </button>
                </Link>
                
            </div>

            <small className="text-muted">
                Gratis para todos los vecinos de las Comunas 1 y 2
            </small>
        </section>
    );
}

export default Information;