import React from "react"

function PokemonMoves(props){
    const[show, setShow]= React.useState(false);
    const moves= props.moves.map((e)=>(<p>{e.move.name}</p>));

    return(
        <div>
            <h2 onClick={()=>setShow(prevShow=>!prevShow)}>
                {show?"➡": "⬇"}Moves
            </h2>
            {show && moves}
        </div>
    )
}

export default PokemonMoves