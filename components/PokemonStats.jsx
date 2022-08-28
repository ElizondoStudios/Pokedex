function PokemonStats(props){
    const hp_bar= ((100*props.stats[0].base_stat)/250)+"px"
    const att_bar= ((100*props.stats[1].base_stat)/250)+"px"
    const def_bar= ((100*props.stats[2].base_stat)/250)+"px"
    const spa_bar= ((100*props.stats[3].base_stat)/250)+"px"
    const spd_bar= ((100*props.stats[4].base_stat)/250)+"px"
    const spe_bar= ((100*props.stats[5].base_stat)/250)+"px"

    return(
        <div className="pokemonStats">
            <div className="pokemonStats--stat-div">
                <h2 className="pokemonStats--stat-div--stats">
                    <span>HP:</span> 
                    <div className="pokemonStats--stat-div--stats--stat-bar" style={{width: hp_bar}}/>
                    {props.stats[0].base_stat}
                </h2>
            </div>
            <div className="pokemonStats--stat-div">
                <h2 className="pokemonStats--stat-div--stats">
                    <span>Attack:</span> 
                    <div className="pokemonStats--stat-div--stats--stat-bar" style={{width: att_bar}}/>
                    {props.stats[1].base_stat}
                </h2>
            </div>
            <div className="pokemonStats--stat-div">
                <h2 className="pokemonStats--stat-div--stats">
                    <span>Defense:</span>
                    <div className="pokemonStats--stat-div--stats--stat-bar" style={{width: def_bar}}/>
                    {props.stats[2].base_stat}
                </h2>
            </div>
            <div className="pokemonStats--stat-div">
                <h2 className="pokemonStats--stat-div--stats">
                    <span>Sp. Atk:</span>
                    <div className="pokemonStats--stat-div--stats--stat-bar" style={{width: spa_bar}}/>
                    {props.stats[3].base_stat}
                </h2>
            </div>
            <div className="pokemonStats--stat-div">
                <h2 className="pokemonStats--stat-div--stats">
                    <span>Sp. Def:</span>
                    <div className="pokemonStats--stat-div--stats--stat-bar" style={{width: spd_bar}}/>
                    {props.stats[4].base_stat}
                </h2>
            </div>
            <div className="pokemonStats--stat-div">
                <h2 className="pokemonStats--stat-div--stats">
                    <span>Speed:</span>
                    <div className="pokemonStats--stat-div--stats--stat-bar" style={{width: spe_bar}}/>
                    {props.stats[5].base_stat}
                </h2>
            </div>    
        </div>
    )
}

export default PokemonStats