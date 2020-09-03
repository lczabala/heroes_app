import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

//Este componnete permitirá renderizar el componente requerido sólo si el usuario está logueado

//Se recibe el componente, el valor si el usuario está logueado y la ruta (en rest)
export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    //Se guarda en el localstorage la ultima ruta en la que estuvo el usuario
    //Se estará actualizando constantemente
    localStorage.setItem('pathName', rest.location.pathname);
    return (
        //El componente devuelve un Route con los valores que se reciben
        <Route
            {...rest}
            //Para mostrar el componente, es necesario evaluar si el usuario está logueado, de no estarlo, se redirecciona
            component = {
                //las props especificadas vienen con el componente que se recibe
                (props) =>(
                    (isAuthenticated)
                        ? (<Component {...props}/>)
                        : (<Redirect to="/login"/>)
                )
            }
        
        />
    )
}

PrivateRoute.propTypes  = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
