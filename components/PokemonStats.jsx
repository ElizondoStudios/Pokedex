function PokemonStats(props){
    return(
        <div className="pokemonStats">
            {props.id<10000 && <h2 className="pokemonStats--title">
                <span>Number: </span>{props.id}
            </h2>}
            <h2 className="pokemonStats--title">
                <span>{props.type2? "Types: ": "Type: "}</span>
                {props.type1}{props.type2 && `/${props.type2}`}
            </h2>
            <h2 className="pokemonStats--title">
                <span>Height: </span>{props.height/10}m
            </h2>
            <h2 className="pokemonStats--title">
                <span>Weight: </span>{props.weight/10}kg
            </h2>
        </div>
    )
}

export default PokemonStats