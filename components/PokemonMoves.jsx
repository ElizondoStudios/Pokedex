import React from "react"

function PokemonMoves(props){
    const[show, setShow]= React.useState(false);
            const moves= props.moves.map((e)=>(<p className="pokemonMoves--move">-{e.move.name}</p>));

    return(
        <div className="pokemonMoves">
            <h2 
            className="pokemonMoves--title"
            onClick={()=>setShow(prevShow=>!prevShow)}>
                {show?"➡": "⬇"}Moves:
            </h2>
            {show && moves}
        </div>
    )
}

export default PokemonMoves