const initState = {
    personajes: []
}

function personajesReducer(state = initState, action) {
    switch(action.type) {
        case 'TRAER_TODOS_LOS_PERSONAJES':
            return {
                ...state,
                personajes: action.payload
            }

        default:
            return state;
    }
}

export default personajesReducer