import { combineReducers } from "redux";
import personajesReducer from "./personajesReducer";
const mainReducer = combineReducers({
    personajesReducer
});

export default mainReducer;
