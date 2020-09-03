import React, { useMemo } from 'react';
//import { SearchHero } from '../search/SearchHero';
//import { heroes } from '../../data/heroes';
import { HeroeCard } from './HeroeCard';
import queryString from 'query-string';
import { useForms } from '../../hooks/useForms';
import { useLocation } from 'react-router-dom';
import { getHeroByName } from '../../selectors/getHeroByName';

export const HomeHeroes = ({history}) => {
    
    //Location que nos proporciona react-router-dom
    const location = useLocation();
    const {q =''} = (queryString.parse(location.search));
    
    const [{search}, handleOnChange] = useForms({
        search: q
    });
    
    const heroFiltered = useMemo(() => getHeroByName(q), [q]);
    
    const handleSearch = (e) =>{
        e.preventDefault();        
        history.push(`?q=${ search }`);
    }
    
    return (
        <div>
            <div>
            <form className="form-inline formStyle" onSubmit={handleSearch}>                
                <input 
                    type="text" 
                    className="form-control mb-2 col-4 mr-3" 
                    placeholder="Search Hero"
                    name="search"
                    value={search}
                    onChange={handleOnChange}
                />                

                <button type="submit" className="btn btn-primary mb-2">Search</button>
            </form>           
        </div>
            <div className="row containerHeroes m-0">
                {
                    (q === '')
                        &&
                        <div className="alert alert-info mt-2">
                            Search a hero
                        </div>
                }
                {/* {
                    (q !== '' && heroFiltered.length===0)
                        &&
                        <div className="alert alert-info mt-2">
                            There is no a hero with {q}
                        </div>
                } */}
                {
                    (q !== '')     
                    &&                                                
                    [heroFiltered].map(hero => (
                        <HeroeCard key={hero.id} hero={hero}/>
                    ))                                    
                }
            </div>            
        </div>
    )
}
