import './css/Pokecard.css'

const Pokecard = ({id, name, type, base_experience}) => (
    <div className="Pokecard-column">
        <div className="Pokecard-card">
            <p><b>{name}</b></p>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    </div>

    );

    export default Pokecard