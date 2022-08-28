import React from "react"
import PokeballBackground from "../src/assets/pokeball-background.png"
function Pokemon(props){
    const[shiny, setShiny]= React.useState(false)
    const [facing, setFacing]= React.useState(true)

    return(
        <div className="pokemon">
            <h1 className="pokemon--name">{props.name}</h1>
            <div>
            <div className="pokemon--div">   
                <img
                    className="pokemon--div--img" 
                    src={shiny? facing?props.spriteFrontShiny: props.spriteBackShiny:
                         facing? props.spriteFront: props.spriteBack} 
                    onClick={() => {setShiny(prevShiny => !prevShiny)}}
                    alt={props.name}
                />
            </div>
            
            <button
            className="pokemon--button"
            onClick={()=>{setFacing(prevFacing => !prevFacing)}}
            >{facing?">":"<"}</button>
            </div>
        </div>
    )
}

export default Pokemon