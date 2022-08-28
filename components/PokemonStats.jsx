function PokemonStats(props){

    return(
        <div className="pokemonStats">
            <div>
                <h2 className="pokemonStats--stats">
                    <span>HP:</span> {props.stats[0].base_stat}
                </h2>
            </div>
            <div>
                <h2 className="pokemonStats--stats">
                    <span>Attack:</span> {props.stats[1].base_stat}
                </h2>
            </div>
            <div>
                <h2 className="pokemonStats--stats">
                    <span>Defense:</span> {props.stats[2].base_stat}
                </h2>
            </div>
            <div>
                <h2 className="pokemonStats--stats">
                    <span>Sp. Atk:</span> {props.stats[3].base_stat}
                </h2>
            </div>
            <div>
                <h2 className="pokemonStats--stats">
                    <span>Sp. Def:</span> {props.stats[4].base_stat}
                </h2>
            </div>
            <div>
                <h2 className="pokemonStats--stats">
                    <span>Speed:</span> {props.stats[5].base_stat}
                </h2>
            </div>    
        </div>
    )
}

export default PokemonStats