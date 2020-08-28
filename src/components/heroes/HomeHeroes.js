import React from 'react'
import { SearchHero } from '../search/SearchHero'
import { heroes } from '../../data/heroes'
import { HeroeCard } from './HeroeCard'

export const HomeHeroes = () => {
    
    return (
        <div>
            <SearchHero/>
            <div className="row containerHeroes m-0">
                {
                    heroes.map( hero =>(
                        <HeroeCard key={hero.id} hero = {hero}/>
                    ))
                }
            </div>
            
        </div>
    )
}
