import React, { useState } from 'react';
import MiLista from '../lista/MiLista';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import Form from './Form.js';
import Fondo from '../../img/fondo.jpg';

function App() {
    const [incidencias, setIncidencias] = useState([
        {
            id_incidencias: 1,
            id_usuario: "lucasgd98",
            titulo: "Proyecto averiado",
            descripcion: "Proyector averiado en el aula 2",
            categoria: "Hardware",
            nivel_urgencia: "Media",
            fecha_registro: "2025-10-20",
            estado: "Abierto",
            ubicacion: "B205"
        },
        {
            id_incidencias: 2,
            id_usuario: "marialopez",
            titulo: "Ordenador no enciende",
            descripcion: "El ordenador del puesto 15 no arranca",
            categoria: "Hardware",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-21",
            estado: "En proceso",
            ubicacion: "A103"
        },
        {
            id_incidencias: 3,
            id_usuario: "carlosm",
            titulo: "Impresora sin conexión",
            descripcion: "La impresora de la sala de profesores no se conecta a la red",
            categoria: "Red",
            nivel_urgencia: "Baja",
            fecha_registro: "2025-10-22",
            estado: "Abierto",
            ubicacion: "Sala Profesores"
        }
    ]);

    const agregarincidencia = (
        titulo_nuevo,
        usuario_nuevo,
        descripcion_nuevo,
        categoria_nuevo,
        nivel_urgencia_nuevo,
        ubicacion_nuevo
    ) => {
        const fecha = new Date();
        const year = fecha.getFullYear();
        const mes = String(fecha.getMonth() + 1).padStart(2, '0');
        const dia = String(fecha.getDate()).padStart(2, '0');
        const fecha_formateada = `${year}-${mes}-${dia}`;
        
        const nueva_incidencia = {
            id_incidencias: incidencias.length + 1,
            id_usuario: usuario_nuevo,
            titulo: titulo_nuevo,
            descripcion: descripcion_nuevo,
            categoria: categoria_nuevo,
            nivel_urgencia: nivel_urgencia_nuevo,
            fecha_registro: fecha_formateada,
            estado: "Abierta",
            ubicacion: ubicacion_nuevo
        };
        
        setIncidencias([...incidencias, nueva_incidencia]);
    };

    return (
        <>
            <Header />
            <div className="card border-0" style={{ 
                backgroundImage: `url(${Fondo})`, 
                backgroundSize: "cover", 
                backgroundRepeat: "no-repeat",
                minHeight: "100vh"
            }}>
                <h2 className="card-title mb-5 mt-4 text-center text-white bg-dark bg-opacity-75 p-3 mx-auto rounded" style={{maxWidth: "600px"}}>
                    Panel de Control de Incidencias
                </h2>
                <div className="container-fluid mt-3 px-5">
                    <div className="row g-4">
                        <aside className="col-lg-7 col-md-12">
                            <div className="bg-white bg-opacity-90 p-4 rounded shadow-lg">
                                <h4 className="text-info mb-4">
                                    <i className="bi bi-list-ul"></i> Listado de Incidencias Registradas
                                </h4>
                                <MiLista incidencias={incidencias} />
                            </div>
                        </aside>
                        <main className="col-lg-5 col-md-12">
                            <div className="bg-white bg-opacity-90 rounded shadow-lg">
                                <Form agregarincidencia={agregarincidencia} />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;