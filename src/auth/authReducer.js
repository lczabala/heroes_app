import { types } from "../types/types";

//El reducer recibe el estado y el action
export const authReducer = (state = {}, action) => {
    
    //Se evalúa el tipo de action, para ello, se usa el diccionario de type creado
    switch (action.type) {
        case types.login:
           return{
               ...action.payload,
               logged: true
           }
        
        case types.logout:
            return{
                logged: false
            }

        default:
            return state;
    }
}
