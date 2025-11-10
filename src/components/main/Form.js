import React from 'react';
import './form.css';


class Form extends React.Component{


    envioFormulario= (event)=>{
        event.preventDefault();
        const form= event.target;
        this.props.agregarIncidencia( form.titulo.value, form.usuario.value , form.Descripcion.value, form.Categoria.value, form.Urgencia.value, 
             form.ubicacion.value
        )

    }


    render(){
        return(
            <div>
                <h2>Registrar incidencia</h2>
                <form onSubmit={this.envioFormulario}>
                
                

                <div className="elemento-form">
                    <label>Titulo: </label>
                    <input type="text" name="titulo" placeholder="Introduce el titulo de la incidencia" required></input>
                </div>

                <div className="elemento-form">
                    <label>Usuario: </label>
                    <input type="text" name="usuario" placeholder="Introduce el usuario" required></input>
                </div>

                <div className="elemento-form">
                    <label>Descripcion: </label>
                    <input type="text" name="Descripcion" placeholder="Introduce la descripcion de la incidencia" required></input>
                </div>

                <div className="elemento-form">
                    <label>Categoria: </label>
                    <select name="Categoria" required>
                        <option value = "">Seleccionar...</option>
                        <option>Hardware</option>
                        <option>Software</option>
                        <option>Red y conectividad</option>
                        <option>Usuarios y accesos</option>
                        <option>Infraestructura</option>
                    </select>
                </div>

                <div className="elemento-form">
                    <label>Urgencia: </label>
                    <select name="Urgencia" required>
                        <option value = "">Seleccionar...</option>
                        <option>Alta</option>
                        <option>Media</option>
                        <option>Baja</option>
                    </select>
                </div>

                

                <div className="elemento-form">
                    <label>Estado: </label>
                    <select name="Estado" required>
                        <option value = "">Seleccionar...</option>
                        <option>Abierto</option>
                        <option>En curso</option>
                        <option>Resuelta</option>
                        <option>Cerrada</option>

                    </select>
                </div>

                <div className="elemento-form">
                    <label>Ubicacion: </label>
                    <input type="text" name="ubicacion" placeholder="Introduce la ubicacion" required></input>
                </div>

                <button className="elemento-form-button" type="submit">Registrar</button>

                </form>

            </div>


        )

    }


}
export default Form;