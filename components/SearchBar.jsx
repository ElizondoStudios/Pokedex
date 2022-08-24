import React from "react";

function SearchBar(props){
    const [pokemon, setPokemon]= React.useState("");

    function handleClick(){
        props.SearchFunc(pokemon.toLowerCase())
    }

    function pokemonText(event){
        setPokemon(event.target.value)
    }

    return(
        <form className="searchbar" onSubmit={(event)=>{event.preventDefault()}}>
            <input className="searchbar--searchbar-input" type="text" onChange={pokemonText} On></input>
            <button className="searchbar--button" onClick={handleClick}>Search pokémon</button>
            <button className="searchbar--button" onClick={props.randomPokemon}>Random pokémon</button>
        </form>
    )
}

export default SearchBar