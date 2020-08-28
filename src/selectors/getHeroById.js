import { heroes } from '../data/heroes';

export const getHeroById = (id) => {   

    console.log("se ejecuta getHeroesById");

    return heroes.find(hero => hero.id === id);
}