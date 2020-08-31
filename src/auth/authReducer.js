import { types } from "../types/types";

export const authReducer = ({estate = {}, action}) => {
    switch (action.type) {
        case types.login:
           return{
               ...action.payload,
           }
    
        default:
            break;
    }
}
