import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = () => {

    const [peliculaState, setPeliculaState] = useState({
        titulo: '',
        descripcion: ''
    });

    const {titulo, descripcion} = peliculaState;

    const conseguirDatosForm = e => {
        //e.preventDefault es para que no se reinicie el formulario 
        e.preventDefault();

        //Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Crear objeto de la pelicula a guardar
        let pelicula = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        //Guardar estado
        setPeliculaState(pelicula)

        


        //Guardar en el almacenamiento local (LocalStorage)
        GuardarEnStorage("pelicula", pelicula)



    }


  return (
    <div className="add">
            <h3 className="title">{titulo}</h3>

            <strong>
                {(titulo && descripcion) && "Has creado la pelicula: " + titulo}
            </strong>
    
            <form onSubmit={conseguirDatosForm}>
                <input type="text" id="titulo" name='titulo' placeholder="Titulo" />
                <textarea id="descripcion" name='descripcion' placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
    </div>
  )
}
