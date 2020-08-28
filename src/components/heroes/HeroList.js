import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';


export const HeroList = ({publisher}) => {
    console.log(publisher);
    //Se usa el useMemo para memorizar el resultado de la función, de esta forma garantizamos que cada
    //vez que se renderice el componente, la función se ejecute cuando el publisher cambie
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    //const heroes = getHeroesByPublisher(publisher);

    return (
        <>
            <div className="row containerHeroes">
                {
                    heroes.map( hero =>(                                                
                        <HeroeCard key={hero.id} hero={hero}/>
                    ))
                }
            </div>
        </>
    )
}
