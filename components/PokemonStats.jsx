function PokemonStats(props){
    return(
        <div>
            <h2>Number: {props.id}</h2>
            <h2>{props.type2? "Types: ": "Type: "}{props.type1}{props.type2 && `/${props.type2}`}</h2>
            <h2>Height: {props.height/10}m</h2>
            <h2>Weight: {props.weight/10}kg</h2>
        </div>
    )
}

export default PokemonStats