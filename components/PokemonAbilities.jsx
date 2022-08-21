function PokemonAbilities(props){
    return(
        <div>
            <h2>Abilities: </h2>
            <h3>{props.ability1}</h3>
            {props.ability2 && <h3>{props.ability2}</h3>}
        </div>
    )
}

export default PokemonAbilities