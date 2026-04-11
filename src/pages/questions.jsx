import React from 'react';
import { Link } from 'react-router-dom';

function Questions() {
    return (
        <>
            <section className="container py-5">
                <div className="text-center mb-5">
                    <div className="d-inline-block p-3 rounded-circle bg-success-subtle mb-3">
                        <i className="fa-regular fa-circle-question fs-2 text-success"></i>
                    </div>
                    <h2 className="display-6 fw-bold">Preguntas Frecuentes</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        Resolvemos las dudas más comunes sobre EcoRutas y los horarios de recolección en las Comunas 1 y 2.
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-11">
                        <div className="accordion accordion-flush shadow-sm rounded-4 overflow-hidden border" id="accordionFlushExample">

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                                        ¿Los recordatorios por correo tienen algún costo?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body text-muted">
                                        No, EcoRutas es completamente gratis. Solo necesitas registrar tu correo electrónico y seleccionar tu barrio para empezar a recibir los recordatorios el día anterior a la recolección.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
                                        ¿Qué pasa si el camión no pasa en el horario indicado?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body text-muted">
                                        Los horarios son aproximados y pueden variar por condiciones del tráfico o clima. Si el camión no pasa, puedes reportarlo y actualizaremos la información para todos los vecinos.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">
                                        ¿Puedo instalar EcoRutas en mi dispositivo?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body text-muted">
                                        Sí, EcoRutas es una PWA (Progressive Web App). En tu navegador, busca la opción 'Agregar a pantalla de inicio' o 'Instalar aplicación'.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour">
                                        ¿EcoRutas funciona en otras comunas de Medellín?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body text-muted">
                                        Por ahora solo cubrimos las Comunas 1 (Popular) y 2 (Santa Cruz). Estamos trabajando para expandir a más zonas de la ciudad.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="col-12 col-md-12">
                    <div className="bg-success text-white text-center p-5 shadow-lg">

                        <div className="d-inline-flex align-items-center bg-white bg-opacity-10 border border-white border-opacity-25 rounded-pill px-3 py-1 mb-4">
                            <i className="fa-solid fa-mobile-screen-button me-2 small"></i>
                            <span style={{ fontSize: '0.85rem' }}>Disponible para todos los dispositivos</span>
                        </div>

                        <h2 className="display-5 fw-bold mb-3">
                            Empieza a recibir recordatorios hoy mismo
                        </h2>

                        <p className="lead mb-5 mx-auto opacity-75" style={{ maxWidth: '700px' }}>
                            Registra tu correo y barrio en menos de 30 segundos. Te avisaremos el día antes
                            de cada recolección para que nunca más olvides sacar la basura.
                        </p>

                        <Link to="/recordatorios" className="btn btn-white btn-lg px-5 py-3 rounded-pill fw-bold shadow-sm transition-hover" style={{ backgroundColor: 'white', color: '#198754' }}>
                            <i className="fa-regular fa-bell me-2"></i>
                            Activar recordatorios
                            <i className="fa-solid fa-arrow-right ms-2 small"></i>
                        </Link>

                        <p className="mt-4 mb-0 opacity-50 small">
                            Sin spam, sin costo. Solo recordatorios útiles.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Questions;