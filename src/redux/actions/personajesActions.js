import axios from "axios"

const api = 'https://rickandmortyapi.com/api'

const personajesActions = {
    traerTodosLosPersonajes: () => {
        return async (dispatch, getState) => {
            // const response = await axios.get("https://rickandmortyapi.com/api/character")
            const response = await axios.get(`${api}/character`)
            // console.log(response.data.results)
            dispatch({
                type: "TRAER_TODOS_LOS_PERSONAJES",
                payload: response.data.results
            })
        }
    }
}

export default personajesActions