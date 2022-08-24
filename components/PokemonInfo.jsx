function PokemonInfo(props){
    return(
        <div className="pokemonInfo">
            {props.id<10000 && <h2 className="pokemonInfo--title">
                <span>Number: </span>{props.id}
            </h2>}
            <h2 className="pokemonInfo--title">
                <span>{props.type2? "Types: ": "Type: "}</span>
                {props.type1}{props.type2 && `/${props.type2}`}
            </h2>
            <h2 className="pokemonInfo--title">
                <span>Height: </span>{props.height/10}m
            </h2>
            <h2 className="pokemonInfo--title">
                <span>Weight: </span>{props.weight/10}kg
            </h2>
        </div>
    )
}

export default PokemonInfo