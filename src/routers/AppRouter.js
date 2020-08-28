import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {LoginScreen} from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <>
            <Router>   
                    <Switch>
                        {/*El login siempre quedará fuera del NavBar, simulando el logout, ya no verá las opciones*/}
                        <Route exact path="/login" component={LoginScreen}/>                    
                        <Route path="/" component={DashboardRoutes}/>
                    </Switch>                           
            </Router>
        </>
    );
}
