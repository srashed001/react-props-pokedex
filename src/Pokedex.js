import Pokecard from "./Pokecard"

import './css/Pokedex.css'

const Pokedex = ({pokemon}) => {
    return (
        <div className="Pokedex-container">
            {pokemon.map(p=>(
                <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
            ))}
        </div>
    )
}

export default Pokedex