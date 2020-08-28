import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {
    
    const validPublisher = ["DC Comics", "Marvel Comics"];
    
    if (!validPublisher.includes(publisher)) {
        throw new Error("Error");
    }

    console.log("se ejecuta getHeroesByPublisher");

    return heroes.filter(hero => hero.publisher === publisher);
}
