import React, { useState } from 'react';

function Form({ agregarIncidencia }) {

    const [titulo, setTitulo] = useState('');
    const [email, setEmail] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');
    const [nivelUrgencia, setNivelUrgencia] = useState('');
    const [ubicacion, setUbicacion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        agregarIncidencia(
            titulo,
            email,
            descripcion,
            categoria,
            nivelUrgencia,
            ubicacion
        );

        // limpiar el formulario
        setTitulo('');
        setEmail('');
        setDescripcion('');
        setCategoria('');
        setNivelUrgencia('');
        setUbicacion('');
    };

    return (
        <div className="card p-4">
            <h2 className="card-title mb-4 text-center">Registrar incidencia</h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Título incidencia</label>
                    <input 
                        className="form-control" 
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        className="form-control"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <textarea
                        className="form-control"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Categoría</label>
                    <select 
                        className="form-control"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        required
                    >
                        <option value="">Seleccionar...</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Software">Software</option>
                        <option value="Conectividad">Conectividad</option>
                        <option value="Usuarios">Usuarios</option>
                        <option value="Infraestructura">Infraestructura</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Nivel de urgencia</label>
                    <select 
                        className="form-control"
                        value={nivelUrgencia}
                        onChange={(e) => setNivelUrgencia(e.target.value)}
                        required
                    >
                        <option value="">Seleccionar...</option>
                        <option value="Alta">Alta</option>
                        <option value="Media">Media</option>
                        <option value="Baja">Baja</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Ubicación</label>
                    <input 
                        className="form-control"
                        type="text"
                        value={ubicacion}
                        onChange={(e) => setUbicacion(e.target.value)}
                        required
                    />
                </div>

                <div className="d-grid mx-auto">
                    <button type="submit" className="btn btn-success">
                        Registrar
                    </button>
                </div>

            </form>
        </div>
    );
}

export default Form;
