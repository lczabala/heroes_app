import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';

export const NavBar = () => {
    const {user} = useContext(AuthContext)
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
                    <li className="nav-item helloUser">
                        {
                            `Hello, ${user.name}!!`
                        }
                    </li>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
