function ChangeButtons(props){
    return(
        <div className="changeButtons">
            {(props.changePokemon>1) && 
            <button onClick={props.prevPokemon} className="changeButtons--left">
            </button>}
            <button onClick={props.nextPokemon} className="changeButtons--right">
            </button>
        </div>
    )
}

export default ChangeButtons