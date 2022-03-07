import React, { useEffect } from 'react'
import CardPersonajes from '../components/CardPersonajes'

import { useDispatch, useSelector } from 'react-redux'

import personajesActions from '../redux/actions/personajesActions'

const Personajes = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(personajesActions.traerTodosLosPersonajes())
  }, [])

  const prueba = useSelector(state => state.personajesReducer.personajes)

  console.log(prueba)

  return (
    <>
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-20">
        {/* < CardPersonajes /> */}

        {prueba.length && prueba.map(personaje => <CardPersonajes key={personaje.name} personaje={personaje} />)}
      </div>
    </>
  )
}

export default Personajes