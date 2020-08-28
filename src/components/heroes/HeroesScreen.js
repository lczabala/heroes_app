import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';


export const HeroesScreen = ({history}) => {

    //Con el useParams se puede optener el id del heroe que es pasado como parametro en la Url
    const {heroId} = useParams();
    
    const hero = useMemo(() => getHeroById(heroId), [heroId]);
    //const hero = getHeroById(heroId);

    if (!hero){
        return <Redirect to="/"/>
    }

    const handleReturn = ()=>{
        if(history.length <=2){
            history.push("/");
        }else{
            history.goBack();
        }
    }
    return (
        <div className="row containerHeroes m-0 mt-4 animate__animated animate__fadeInLeft">
            <div className="cardHero card col-md-3 col-sm-6 col-xs-8">
                <img src={`../assets/heroes/${heroId}.jpg`} className="card-img" alt={hero.superhero} />
                <div className="card-body">
                    <h5 className="card-title">{hero.superhero}</h5>
                    <ul>
                        <li className="card-text">Alter ego: {hero.alter_ego}</li>
                        {
                            (hero.alter_ego !== hero.characters)
                            && <li className="card-text">Characters: {hero.characters}</li>
                        }                        
                        <li className="card-text">First appearance: {hero.first_appearance}</li>
                        <li className="card-text">Publisher: {hero.publisher}</li>
                    </ul>                
                </div> 
                <button className="btn btn-warning" onClick={handleReturn}>Return</button>           
            </div>
        </div>
        
    )
}
