import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('')

  const buscarPelicula = (e) => {
      //Crear estado y actualizarlo
      setBusqueda(e.target.value)

      //El listado completo de peliculas

      //Filtrar para buscar coincidencias
      let peliculas_encontradas = listadoState.filter(pelicula => {
        return pelicula.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase())
      })

      if(busqueda.length <= 1) {
        peliculas_encontradas = JSON.parse(localStorage.getItem("peliculas"))
      } else {

      }

      //Comprobar si hay un resultado

      //Dar valor de todo en LocalStorage

      //Actualizar estado del listado principal con lo que he logrado filtrar 
      setListadoState(peliculas_encontradas)

  }
  return (
    <div className="search">
            <h3 className="title">Buscador</h3>
            <form>
                <input type="text" 
                        id="search_field"
                        name='busqueda'
                        autoComplete='off'
                        value={busqueda}
                        onChange={buscarPelicula} />

                <button id="search">Buscar</button>
            </form>
    </div>
  )
}
