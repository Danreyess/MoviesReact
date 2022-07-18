import React, { useEffect, useState } from 'react'
import { Edit } from './Edit';

export const Listado = () => {

    const [listadoState, setListadoState] = useState([])

    const [editar, setEditar] = useState(0)


    useEffect(() => {
        conseguirPeliculas()

    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelicula"))

        setListadoState(peliculas)

        return peliculas
    }

    const borrarPeli = (id) => {
        //Conseguir peliculas almacenadas
        let pelis_alamcenadas = conseguirPeliculas();

        //Filtrar esas peliculas para que elimine del array la que no quiero 
        let nuevo_array_peliculas = pelis_alamcenadas.filter(pelicula => pelicula.id !== parseInt(id))

        console.log(pelis_alamcenadas, nuevo_array_peliculas)

        //Actualizar estado del listado 
        setListadoState(nuevo_array_peliculas)

        //Actualizar los datos en el localStorage
        localStorage.setItem('pelicula', JSON.stringify(nuevo_array_peliculas))
    }


  return (
    <>
    {listadoState != null  ?
         listadoState.map(pelicula => {
            return(
            <article Key={pelicula.id} className="peli-item">
            <h3 className="title">{pelicula.titulo}</h3>
            <p className="description">{pelicula.descripcion}</p>

            <button className="edit" onClick={() => setEditar(pelicula.id)}>Editar</button>
            <button className="delete" onClick={() => borrarPeli(pelicula.id)}>Borrar</button>

            {/*Aparece formulario de edeitar*/}
            {editar === pelicula.id && (

                <Edit pelicula={pelicula}
                        conseguirPeliculas={conseguirPeliculas}
                        setEditar={setEditar}
                        setListadoState={setListadoState}
                        />

            )}

        </article>
        );
    })
    : <h2>no hay peliculas para mostrar</h2>
}

    </>
  )
}
