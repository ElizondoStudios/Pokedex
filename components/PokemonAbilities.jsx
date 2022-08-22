import React from "react"

function PokemonAbilities(props){
    const [show, setShow]= React.useState(false)

    return(
        <div className="pokemonAbilities">
            <h2 
            className="pokemonAbilities--title"
            onClick={()=>setShow(prevShow=>!prevShow)}> 
                {show?"➡": "⬇"} Abilities: 
            </h2>
            {show && <h3 className="pokemonAbilities--ability" >-{props.ability1}</h3>}
            {show && (props.ability2 && <h3 className="pokemonAbilities--ability">-{props.ability2}</h3>)}
        </div>
    )
}

export default PokemonAbilities