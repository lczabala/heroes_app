import React, { useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';
import { authReducer } from './auth/authReducer';
import { AuthContext } from './auth/AuthContext';

//init busca en el local storage el usuario, de no encontrarlo, devuelve false para el logged
const init = () =>{
    return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

export const HeroesApp = ({publisher}) => {
    
    const [user, dispatch] = useReducer(authReducer, {}, init)

    return (
        <div> 
            {/* El AuthContext estará disponible para toda la aplicacón, volviendo accesible el user y el dispatch para su uso */}
            <AuthContext.Provider value={{user, dispatch}}>
                <AppRouter/>
            </AuthContext.Provider>
            
        </div>
    )
}
