import 'bootstrap/dist/css/bootstrap.css';
import './PokemonCard.scss';
import './PokedexListItem.scss';

const convertThePokemonName = (name) => {
    name = name.toLowerCase();
    if (name.includes("'")) {
        name = name.replace("'", "_");
    }
    return name;
}

const ElementColors = {
    "Fire" : "#E08030",
    "Water" : "#6890F0",
    "Grass" : "#78C850",
    "Electric" : "#F8D030",
    "Ice" : "#98D8D8",
    "Fighting" : "#C03028",
    "Poison" : "#A040A0",
    "Ground" : "#E0C068",
    "Flying" : "#A890F0",
    "Psychic" : "#F85888",
    "Bug" : "#A8B820",
    "Rock" : "#5e4a1a",
    "Ghost" : "#705898",
    "Dragon" : "#7038F8",
    "Dark" : "#705848",
    "Steel" : "#B8B8D0",
    "Fairy" : "#EE99AC",
    "Normal" : "#A8A878"
}


const PokemonCard = ({pokemon,Height,Width,setPokemon}) => {
    const pokemons = require('./pokemon.json');
    let type1 = pokemon.Type1;
    let type2 = pokemon.Type2;
    let BGColor = ElementColors[type1];
    const getBasePokemon = (pokemon) => {
        while(pokemon.Previous){
            pokemon = pokemons.find((p)=>p.Name===pokemon.Previous);
        }
        return pokemon;
    }
    let basePokemon = getBasePokemon(pokemon);
    let evolutionChain = [];
    while(basePokemon){
        evolutionChain.push(basePokemon);
        evolutionChain.push("->");
        basePokemon = pokemons.find((p)=>p.Name===basePokemon.Next);
    }
    evolutionChain.pop();
    if(type2){
        BGColor = "linear-gradient("+ElementColors[type1]+", "+ElementColors[type2]+")";
    }
    return (
        <div>
            <div className="PokemonCard" style={{height:(Height*0.6+"px"),width:(Width*0.40+"px"),background:BGColor}}>
                <div style={{display:"grid",gridTemplateColumns:"20% 60% 20%",backgroundColor:""}}>
                    <div className="center-container" style={{backgroundColor:"",padding:"4%",marginLeft:"4%",height:Height*0.18+"px"}}>
                        <img className="PokemonCardImg" style={{height:"100%"}} src={process.env.PUBLIC_URL + "/img/pokemons/" + convertThePokemonName(pokemon.Name) + ".png"} alt={pokemon.Name} />
                    </div>
                    <div className="center-container" style={{textAlign:"center"}}>
                        <h1 style={{flex:"1 1 0",fontSize:"3em"}}>{pokemon.Name}</h1>
                    </div>
                    <div className="center-container" style={{flexDirection:'Column',justifyContent:"flex-start"}}>
                        <h1 style={{flex:"1 1 0",fontSize:"2.5em",marginRight:"1em",marginTop:"0.2em"}}>{"#"+pokemon.No>100?pokemon.No:pokemon.No>10?"#0"+pokemon.No:"#00"+pokemon.No}</h1>
                    </div>

                </div>
                <div style={{display:"grid",gridTemplateColumns:"33% 33% 33%",marginLeft:"10%",marginRight:"10%"}}>
                    <div className="center-container" style={{flexDirection:'Column',justifyContent:"center"}}>
                        <h1 className="PokemonStat">HP: {pokemon.HP}</h1>
                        <span className='StatBar' style={{width:(pokemon.HP*100/140)+"%"}}></span>
                        <h1 className="PokemonStat">Speed: {pokemon.Speed}</h1>
                        <span className='StatBar' style={{width:(pokemon.Speed*100/140)+"%"}}></span>

                    </div>
                    <div className="center-container" style={{flexDirection:'Column',justifyContent:"center"}}>
                        <h1 className="PokemonStat">Attack: {pokemon.Attack}</h1>
                        <span className='StatBar' style={{width:(pokemon.Attack*100/140)+"%"}}></span>
                        <h1 className="PokemonStat">Defense: {pokemon.Defense}</h1>
                        <span className='StatBar' style={{width:(pokemon.Defense*100/140)+"%"}}></span>
                    </div>
                    <div className="center-container" style={{flexDirection:'Column',justifyContent:"center"}}>
                        <h1 className="PokemonStat">Sp. Atk: {pokemon.SpAtk}</h1>
                        <span className='StatBar' style={{width:(pokemon.SpAtk*100/140)+"%"}}></span>
                        <h1 className="PokemonStat">Sp. Def: {pokemon.SpDef}</h1>                    
                        <span className='StatBar' style={{width:(pokemon.SpDef*100/140)+"%"}}></span>    
                    </div>
                </div>
                <div className="center-container" style={{flexDirection:'column'}}>
                    <h1 className="PokemonStat">Total: {pokemon.Total}</h1>
                    <span className='StatBar' style={{width:(pokemon.Total*100/760)+"%",alignSelf:"auto"}}></span>
                </div>
                <div className="center-container" style={{}}>
                    <img className="PokemonElementImage" src={process.env.PUBLIC_URL + "img/elements/" + type1 +".png"} alt=''></img>
                    {type2 ? <img className="PokemonElementImage" src={process.env.PUBLIC_URL + "img/elements/" + type2 +".png"} alt=''></img> : ""}
                </div>
                <div style={{flexDirection:'row',display:"flex",justifyContent:"center",alignItems:"center",gap:"5%"}}>
                    {evolutionChain.map((pokemon)=>{
                        return (
                            <div className='center-container'>
                                {
                                    pokemon==="->"?
                                    <span style={{width:"2em"}}>&rarr;</span>:
                                    <img className="PokemonEvolutionImg" style={{height:Height*0.1+"px"}} src={process.env.PUBLIC_URL + "/img/pokemons/" + convertThePokemonName(pokemon.Name) + ".png"} alt={pokemon.Name} onClick={()=>{setPokemon(pokemon)}}/>
                                }
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
        
    );

}


export default PokemonCard;