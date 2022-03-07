import React, { useEffect } from 'react'
import CardPersonajes from '../components/CardPersonajes'
import personajesActions from '../redux/actions/personajesActions'

import { connect } from 'react-redux'

const PersonajesModoviejo = (props) => {
    console.log(props)

    useEffect(() => {
        props.traerPersonajes()
    }, [])

    return (
        <>
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-20">
                {/* < CardPersonajes /> */}

                {props.personajes.length && props.personajes.map(personaje => <CardPersonajes key={personaje.name} personaje={personaje} />)}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        personajes: state.personajesReducer.personajes
    }
}


const mapDispatchToProps = {
    traerPersonajes: personajesActions.traerTodosLosPersonajes,
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonajesModoviejo)