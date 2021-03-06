import React, { useContext } from 'react';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/AuthContext';

//Se puede accerder al history ya que es una prop que viene con el router
export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);
    //obtengo el ultimo pathname guardado
    const lastPathname = localStorage.getItem('pathName') || "/";

    const handleOnClick = () =>{
        //Con el history, usando el push, podemos ir a una ruta indicada
        //history.push("/");       

        dispatch({
            type: types.login,
            payload: {
                name: 'Luis Zabala'
            }
        });
        
        //al hacer el login se redirecciona al ultimo pathname
        history.replace(`${lastPathname}`);
    }

    return (
        <div className="login-container">            
            <div className="col-4 login">
                <h1>Login</h1>                
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control"/>                        
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>                    
                    <button type="submit" onClick={handleOnClick} className="btn btn-primary">Submit</button>                
            </div>
        </div>
    )
}
