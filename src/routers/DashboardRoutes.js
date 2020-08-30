import React from 'react'
import { NavBar } from '../components/ui/NavBar'
import { Switch, Route, Redirect} from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { HomeHeroes } from '../components/heroes/HomeHeroes'

export const DashboardRoutes = () => {
    return (
        <div>
            <NavBar/>
            
                <Switch>
                    <Route exact path="/dc" component={DcScreen}/>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/hero/:heroId" component={HeroesScreen}/>
                    <Route exact path="/" component={HomeHeroes}/>

                    <Redirect to="/"/>
                </Switch>
        </div>
    )
}
