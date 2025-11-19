import React, { useState } from 'react';

function Form({ agregarincidencia }) {
    const [titulo, setTitulo] = useState('');
    const [usuario, setUsuario] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');
    const [nivelUrgencia, setNivelUrgencia] = useState('');
    const [ubicacion, setUbicacion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        agregarincidencia(titulo, usuario, descripcion, categoria, nivelUrgencia, ubicacion);
        
        // Limpiar formulario
        setTitulo('');
        setUsuario('');
        setDescripcion('');
        setCategoria('');
        setNivelUrgencia('');
        setUbicacion('');
    };

    return (
        <div className="card p-4">
            <h3 className="card-title mb-4 text-center">Registrar incidencia</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Título incidencia</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        name="titulo" 
                        placeholder="Introduce el título" 
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        name="usuario" 
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <textarea 
                        className="form-control" 
                        name="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Categoría</label>
                    <select 
                        className="form-control" 
                        name="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        required
                    >
                        <option value="">Seleccione...</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Software">Software</option>
                        <option value="Red">Red</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Nivel de urgencia</label>
                    <select 
                        className="form-control" 
                        name="nivel_urgencia"
                        value={nivelUrgencia}
                        onChange={(e) => setNivelUrgencia(e.target.value)}
                        required
                    >
                        <option value="">Seleccione...</option>
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
                        name="ubicacion"
                        value={ubicacion}
                        onChange={(e) => setUbicacion(e.target.value)}
                        required 
                    />
                </div>

                <div className="d-grid mx-auto">
                    <button type="submit" className="btn btn-success">Registrar</button>
                </div>
            </form>
        </div>
    );
}

export default Form;