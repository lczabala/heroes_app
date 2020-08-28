import React from 'react'
import { Link } from 'react-router-dom'

export const HeroeCard = ({hero}) => {
    return (
        <div className="cardHero card col-md-3 col-sm-6 col-xs-8 animate__animated animate__fadeIn">
            <img src={`./assets/heroes/${hero.id}.jpg`} className="card-img" alt={hero.superhero} />
            <div className="card-body">
                <h5 className="card-title">{hero.superhero}</h5>
                <ul>
                    <li className="card-text">Alter ego: {hero.alter_ego}</li>
                    {
                        (hero.alter_ego !== hero.characters)
                        && <li className="card-text">Characters: {hero.characters}</li>
                    }
                    
                    <li className="card-text">first appearance: {hero.first_appearance}</li>
                </ul>
                <Link to={`./hero/${hero.id}`} className="btn btn-info">Ver más</Link>
            </div>            
        </div>
    )
}
