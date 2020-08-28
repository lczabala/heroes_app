import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid banner">
                <h1 className="display-4">DC Heroes</h1>                
                <img className="imgHero" src="./assets/banners/DCHeroes.jpg" alt=""/>
            </div>
            <div className="container-fluid">
                <HeroList publisher= "DC Comics"/>
            </div>           

        </div>
    )
}
