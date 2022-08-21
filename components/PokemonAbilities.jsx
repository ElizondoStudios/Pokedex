import React from "react"

function PokemonAbilities(props){
    const [show, setShow]= React.useState(false)

    return(
        <div>
            <h2 onClick={()=>setShow(prevShow=>!prevShow)}> 
                {show?"➡": "⬇"} Abilities: 
            </h2>
            {show && <h3>{props.ability1}</h3>}
            {show && (props.ability2 && <h3>{props.ability2}</h3>)}
        </div>
    )
}

export default PokemonAbilities