import React from 'react';
import queryString from 'query-string';
import { useForms } from '../../hooks/useForms';
import { useLocation } from 'react-router-dom';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchHero = ({history}) => {

    //Location que nos proporciona react-router-dom
    const location = useLocation();
    const {q =''} = (queryString.parse(location.search));

    const [{search}, handleOnChange] = useForms({
        search: q
    });

    const heroFiltered = getHeroByName(search);

    const handleSearch = (e) =>{
        e.preventDefault();
        
        history.push(`?q=${ search }`);
    }
        
    return (
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
    )
}
