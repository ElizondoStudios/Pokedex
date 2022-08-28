import React from 'react'

import SearchBar from '../components/SearchBar';
import PokemonInfo from '../components/PokemonInfo';
import Pokemon from '../components/Pokemon';
import PokemonAbilities from '../components/PokemonAbilities';
import PokemonMoves from '../components/PokemonMoves';
import ChangeButtons from '../components/ChangeButtons';
import PokemonStats from '../components/PokemonStats';

import bulbasaur from './assets/bulbasaur';

function App() {
  // console.log("component rendered");

  //Pokemon itself
  const [pokemon, setPokemon]=React.useState(bulbasaur)

  //Change pokemon 
  const [changePokemon, setChangePokemon]= React.useState(1)
  
  //Total number of pokemon in national dex
  const[numPokemon, setNumPokemon]= React.useState(150);

  React.useEffect(() =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${changePokemon}`)
    .then(res => res.json())
    .then(res => {setPokemon(res)})
  }, [changePokemon])

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokedex/1")
    .then(res => res.json())
    .then(res => res.pokemon_entries.length)
    .then(res => setNumPokemon(res))
  }, [])

  function nextPokemon(){
    setChangePokemon(prevchangePokemon => (prevchangePokemon+1))
  }

  function prevPokemon(){
    setChangePokemon(prevchangePokemon => (prevchangePokemon-1))
  }

  function randomPokemon(){
    const randMon= Math.floor(Math.random()*numPokemon+1)
    setChangePokemon(randMon)
  }

  function SearchPokemon(pokeSearch){
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeSearch}`)
      .then(res => res.json())
      .then(res => {setChangePokemon(res.id)})
  }
  
  return (
    <main>
      <SearchBar
        SearchFunc={SearchPokemon}
        randomPokemon={randomPokemon}
      />

      <ChangeButtons
        prevPokemon={prevPokemon}
        nextPokemon={nextPokemon}
        changePokemon={changePokemon}
      />

      <Pokemon
        name={pokemon.name}
        spriteFront={pokemon.sprites.front_default}
        spriteFrontShiny={pokemon.sprites.front_shiny}
        spriteBack={pokemon.sprites.back_default}
        spriteBackShiny={pokemon.sprites.back_shiny}
      />
      <div className="pokemon-data">
        <div className="pokemon-info-div">
          <PokemonInfo
            id= {pokemon.id}
            height= {pokemon.height}
            weight= {pokemon.weight}
            type1= {pokemon.types[0].type.name}
            type2={pokemon.types.length>1? pokemon.types[1].type.name: ""}
          />
  
          <PokemonAbilities
            ability1={pokemon.abilities[0].ability.name}
            ability2={pokemon.abilities.length>1? pokemon.abilities[1].ability.name:""}
          />
  
          <PokemonMoves
            moves={pokemon.moves}
          />
        </div>
        <PokemonStats
          stats={pokemon.stats}
        />
      </div>
    </main>
  )
}

export default App
