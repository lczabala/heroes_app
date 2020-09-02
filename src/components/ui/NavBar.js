import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const NavBar = () => {
    const {user, dispatch} = useContext(AuthContext);

    const history = useHistory();

    const handleLogout = () => {
        dispatch({
            type: types.logout
        });
        history.replace("/login");
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-bar-color">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">                    
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/marvel">Marvel</NavLink>
                    </li>                    
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/dc">DC</NavLink>
                    </li>
                   
                </ul>                
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-3 helloUser">
                        {
                            (user.name)
                            && `Hello, ${user.name}!!`
                        }
                    </li>
                    <button                         
                        className="btn btn-danger btn-sm logout" 
                        onClick={handleLogout}                        
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
