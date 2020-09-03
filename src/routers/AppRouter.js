import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import {LoginScreen} from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const {user} = useContext(AuthContext);
    return (
        <>
            <Router>   
                    <Switch>
                        {/*El login siempre quedará fuera del NavBar, simulando el logout, ya no verá las opciones*/}
                        <PublicRoute 
                            isAuthenticated={user.logged}
                            exact path="/login" 
                            component={LoginScreen}/>                    
                        <PrivateRoute
                            isAuthenticated={user.logged}
                            path="/" 
                            component={DashboardRoutes}/>
                    </Switch>                           
            </Router>
        </>
    );
}
