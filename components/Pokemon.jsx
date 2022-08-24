import React from "react"

function Pokemon(props){
    const[shiny, setShiny]= React.useState(false)
    const [facing, setFacing]= React.useState(true)

    return(
        <div className="pokemon">
            <h1 className="pokemon--name">{props.name}</h1>
            <div>
            <div className="pokemon--img--div">
                <img
                    className="pokemon--img" 
                    src={shiny? facing?props.spriteFrontShiny: props.spriteBackShiny:
                         facing? props.spriteFront: props.spriteBack} 
                    onClick={() => {setShiny(prevShiny => !prevShiny)}}
                    alt="pokemon"
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