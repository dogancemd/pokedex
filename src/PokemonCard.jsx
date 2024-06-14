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
    "Fire" : "#F08030",
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

const PokemonCard = ({pokemon,Height,Width}) => {
    let type1 = pokemon.Type1;
    let type2 = pokemon.Type2;
    let BGColor = ElementColors[type1];
    if(type2){
        BGColor = "linear-gradient("+ElementColors[type1]+", "+ElementColors[type2]+")";
    }
    return (
        <div>
            <div className="PokemonCard" style={{height:(Height*0.6+"px"),width:(Width*0.40+"px"),background:BGColor}}>
                <div style={{display:"grid",gridTemplateColumns:"20% 60% 20%"}}>
                        <div className="center-container" style={{clipPath:"",backgroundColor:"",height:"100%",padding:"4%",marginLeft:"4%  "}}>
                            <img className="PokemonCardImg" src={process.env.PUBLIC_URL + "/img/pokemons/" + convertThePokemonName(pokemon.Name) + ".png"} alt={pokemon.Name} />
                        </div>
                    <div className="center-container" style={{textAlign:"center"}}>
                        <h1 style={{flex:"1 1 0",fontSize:"2em"}}>{pokemon.Name}</h1>
                    </div>
                    <div className="center-container" style={{flexDirection:'Column',justifyContent:"flex-start"}}>
                        <h1 style={{flex:"1 1 0",fontSize:"2.5em",marginRight:"1em",marginTop:"0.2em"}}>{"#"+pokemon.No>100?pokemon.No:pokemon.No>10?"#0"+pokemon.No:"#00"+pokemon.No}</h1>
                    </div>

                </div>
            </div>
        </div>
        
    );

}


export default PokemonCard;