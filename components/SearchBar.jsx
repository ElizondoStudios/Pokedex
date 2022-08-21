import React from "react";

function SearchBar(props){
    const [pokemon, setPokemon]= React.useState("");

    function handleClick(){
        props.SearchFunc(pokemon)
    }

    function pokemonText(event){
        setPokemon(event.target.value)
    }

    return(
        <div>
            <input type="text" onChange={pokemonText}></input>
            <button onClick={handleClick}>Search pokémon</button>
        </div>
    )
}

export default SearchBar