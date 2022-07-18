import React from 'react'

export const Edit = ({pelicula, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar pelicula"
    const guardarEdicion = (e, id) => {
        e.preventDefault()

        //Conseguir el target del evento 
        let target = e.target

        //Buscar el indice del objeto de la pelicla a actualizar
        const peliculas_almacenadas = conseguirPeliculas()
        const indice = peliculas_almacenadas.findIndex(pelicula => pelicula.id === id)

        //Crear objeto con ese id de ese indice, cib tutulo y descripcion del formulario
        let pelicula_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value,
        }

        //Actualizar el elemento con ese indice
        peliculas_almacenadas[indice] = pelicula_actualizada

        //Guardar el nuevo array de objetos en el localStorage 
        localStorage.setItem("peliculas", JSON.stringify(peliculas_almacenadas))

        //Actualizar estados
        setListadoState(peliculas_almacenadas)
        setEditar(0)

        
    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}</h3>
        <form onSubmit={e => guardarEdicion(e, pelicula.id)}>
            <input type="text"
                    name='titulo'
                    className='titulo_editado'
                    defaultValue={pelicula.titulo} />

            <textarea 
                    name='descripcion'
                    defaultValue={pelicula.descripcion}
                    className='descripcion_editada' />

            <input type="submit" className="editar" value="Actualizar" />
        </form>
    </div>
  )
}
