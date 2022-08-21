import React from "react"

function Pokemon(props){
    const[shiny, setShiny]= React.useState(false)
    const [facing, setFacing]= React.useState(true)

    return(
        <div>
            <h1>{props.name}</h1>
            <img 
                src={shiny? facing?props.spriteFrontShiny: props.spriteBackShiny:
                     facing? props.spriteFront: props.spriteBack} 
                onClick={() => {setShiny(prevShiny => !prevShiny)}}
                alt="pokemon"
            />
            
            <button
            onClick={()=>{setFacing(prevFacing => !prevFacing)}}
            >{">"}</button>
        </div>
    )
}

export default Pokemon