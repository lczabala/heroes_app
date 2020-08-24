import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import {DcScreen} from '../components/dc/DcScreen';
import {LoginScreen} from '../components/login/LoginScreen';
import {MarvelScreen} from '../components/marvel/MarvelScreen';
import {HeroesScreen} from '../components/heroes/HeroesScreen';


import { NavBar } from '../components/ui/NavBar';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <NavBar/>
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/login" component={LoginScreen}/>                    
                        <Route exact path="/dc" component={DcScreen}/>
                        <Route exact path="/marvel" component={MarvelScreen}/>
                        <Route exact path="" component={HeroesScreen}/>
                    </Switch>
                </div>
                
            </Router>
        </>
    );
}
