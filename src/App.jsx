import React from 'react'

import SearchBar from '../components/SearchBar';
import PokemonStats from '../components/PokemonStats';
import Pokemon from '../components/Pokemon';
import PokemonAbilities from '../components/PokemonAbilities';

function App() {
  console.log("component rendered");

  //Pokemon itself
  const [pokemon, setPokemon]=React.useState({
    name:  "bulbasaur",
    id: 1,
    weight: 69,
    height: 7,
    sprites:{
      back_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      back_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      front_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
    },
    types:[
      {
        type:{
          name:"grass"
        }
      },
      {
        type:{
          name:"poison"
        }
      }
    ],
    abilities:[
      {
        ability: {
          name: "overgrow"
        },
        ability: {
          name: "chlorophyll"
        }
      }
    ]
  })

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
    <div>
      <SearchBar
        SearchFunc={SearchPokemon}
      />

      <Pokemon
        name={pokemon.name}
        spriteFront={pokemon.sprites.front_default}
        spriteFrontShiny={pokemon.sprites.front_shiny}
        spriteBack={pokemon.sprites.back_default}
        spriteBackShiny={pokemon.sprites.back_shiny}
      />

      <PokemonStats
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

      {(changePokemon>1)&&<button onClick={prevPokemon}>Previous pokémon</button>}
      <button onClick={nextPokemon}>Next pokémon</button>
      <button onClick={randomPokemon}>Random pokémon</button>
    </div>
  )
}

export default App
