import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import emailjs from '@emailjs/browser';

function Reminders() {
    // Acá capturamos el email.
    const [email, setEmail] = useState('');
    // Y esto sirve pa' que se devuelva a la página principal
    const navigate = useNavigate();

    const handleSubscribe = (e) => {
        e.preventDefault();

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            user_email: email,
            user_barrio: "Comuna 1, Medellín" // Esto lo cambiamos luego por el dato del mapa, ok Alejo?
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
            alert("¡Éxito! El recordatorio ha sido activado. Revisa tu correo 🚛♻️");
            navigate('/');
            setEmail(''); // Limpiamos después de enviar los datos, o sea hello.
        }, (error) => {
            alert("Ups, algo salió mal. Revisa las credenciales.");
            console.log('FAILED...', error);
        });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg border-0" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                        <div className="card-header bg-success text-white text-center py-4">
                            <h3 className="mb-0 fw-bold">🔔 Activar Recordatorio</h3>
                        </div>
                        
                        <div className="card-body p-5">
                            <p className="text-center text-muted mb-4">
                                Te enviaremos un correo electrónico un día antes de que el camión de basura pase por tu barrio.
                            </p>

                            <form onSubmit={handleSubscribe}>
                                <div className="mb-4">
                                    <label className="form-label fw-bold">Tu Correo Electrónico</label>
                                    <input 
                                        type="email" 
                                        className="form-control form-control-lg rounded-pill shadow-sm"
                                        placeholder="ejemplo@correo.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required 
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-bold">Barrio Seleccionado</label>
                                    <div className="alert alert-secondary rounded-pill py-2 px-3">
                                        📍 Comuna 1, Medellín
                                    </div>
                                    <small className="text-muted text-center d-block">
                                        (El barrio se detectará automáticamente con el mapa)
                                    </small>
                                </div>

                                <button 
                                    type="submit" 
                                    className="btn btn-success btn-lg w-100 rounded-pill shadow-sm fw-bold"
                                >
                                    ¡Suscribirme ahora!
                                </button>
                            </form>
                        </div>
                        
                        <div className="card-footer bg-light text-center py-3">
                            <small className="text-secondary">EcoRutas Medellín - Juntos por una ciudad más limpia</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reminders;
